Componente desenvolvido com uma classe:

```jsx
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
```