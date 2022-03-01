import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { setupServer } from "msw/node";
import { handlers } from "./mock";

import { Home } from ".";
import userEvent from "@testing-library/user-event";

const server = setupServer(...handlers); // Criando servidor de interceptações de requisições.

// funções
const qbr = (name, type = "heading") => screen.queryByRole(type, { name });

describe("<Home />", () => {
  beforeAll(() => {
    server.listen(); // iniciando o servidor.
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should render search, posts and load more", async () => {
    render(<Home />);

    await waitForElementToBeRemoved(screen.getByText("Posts not found..."));

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole("img", { name: /title/i });
    expect(images).toHaveLength(2);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    expect.assertions(3);
  });

  it("should search for posts", async () => {
    render(<Home />);

    // esperando um comportamento que acontece depois que acontece o fetch
    await waitForElementToBeRemoved(screen.getByText("Posts not found..."));

    // input de pesquisa
    const search = screen.getByPlaceholderText(/type your search/i);

    // verificando fake fetchs
    expect(qbr("title1 1")).toBeInTheDocument();
    expect(qbr("title2 2")).toBeInTheDocument();
    expect(qbr("title3 3")).not.toBeInTheDocument();

    userEvent.type(search, "title1");

    // verificando busca
    expect(qbr("title1 1")).toBeInTheDocument();
    expect(qbr("title2 2")).not.toBeInTheDocument();
    expect(qbr("title3 3")).not.toBeInTheDocument();

    // verificando header de busca
    expect(qbr("Search value: title1")).toBeInTheDocument();

    userEvent.clear(search);

    expect(qbr("title1 1")).toBeInTheDocument();
    expect(qbr("title2 2")).toBeInTheDocument();
    expect(qbr("title3 3")).not.toBeInTheDocument();

    // verificando pesquisa vazia.
    userEvent.type(search, "bla bla post search");
    expect(screen.getByText("Posts not found...")).toBeInTheDocument();

    expect.assertions(11);
  });

  it("should load more posts when click button", async () => {
    render(<Home />);

    await waitForElementToBeRemoved(screen.getByText("Posts not found..."));

    expect(qbr("title3 3")).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: /load more posts/i });
    userEvent.click(button);

    expect(qbr("title3 3")).toBeInTheDocument();
  });
});
