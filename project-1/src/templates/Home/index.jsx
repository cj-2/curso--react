import { Component, useEffect, useState, useCallback } from "react";
import "./styles.css";

import Posts from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(9);
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const handleLoadPosts = useCallback(async (pageCall, postsPerPageCall) => {
        const postsAndPhotos = await loadPosts();
        setPosts(postsAndPhotos.slice(pageCall, postsPerPageCall));
        setAllPosts(postsAndPhotos);
    }, []);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(page + nextPage);
    };

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
        ? allPosts.filter((post) =>
              post.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        : posts;

    useEffect(() => {
        console.log(new Date().toLocaleString("pt-br"));
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    return (
        <section className="container">
            <div className="search-container">
                {!!searchValue && <h1>Search value: {searchValue}</h1>}

                <TextInput
                    searchValue={searchValue}
                    handleChange={handleChange}
                />
            </div>

            {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
            {filteredPosts.length === 0 && <p>Posts not found...</p>}

            {!searchValue && (
                <div className="button-container">
                    <Button
                        text="Load more posts"
                        actionClick={loadMorePosts}
                        disabled={noMorePosts}
                    />
                </div>
            )}
        </section>
    );
};

// Montando com uma classe.
export class HomeOld extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 9,
        searchValue: "",
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value });
    };

    loadPosts = async () => {
        const { postsPerPage } = this.state;

        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(0, postsPerPage),
            allPosts: postsAndPhotos,
        });
    };

    loadMorePosts = () => {
        const { page, postsPerPage, posts, allPosts } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        this.setState({ posts, page: page + nextPage });
    };

    render() {
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;

        const filteredPosts = !!searchValue
            ? allPosts.filter((post) =>
                  post.title.toLowerCase().includes(searchValue.toLowerCase())
              )
            : posts;

        return (
            <section className="container">
                <div className="search-container">
                    {!!searchValue && <h1>Search value: {searchValue}</h1>}

                    <TextInput
                        searchValue={searchValue}
                        handleChange={this.handleChange}
                    />
                </div>

                {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
                {filteredPosts.length === 0 && <p>Posts not found...</p>}

                {!searchValue && (
                    <div className="button-container">
                        <Button
                            text="Load more posts"
                            actionClick={this.loadMorePosts}
                            disabled={noMorePosts}
                        />
                    </div>
                )}
            </section>
        );
    }
}
