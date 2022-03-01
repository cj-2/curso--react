import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("shoudl text render button with the text 'Load More'", () => {
    const fn = jest.fn();
    render(<Button text="Load more" actionClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });

    expect.assertions(1); // Espero que o teste tenha expect de sucesso.
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load more" actionClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button); // Melhor em alguns casos.
    // fireEvent.click(button); // Mesmo efeito que o anterior.

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disable is true", () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} actionClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it("should be enable when disable is false", () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} actionClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" actionClick={fn} />);
    const { firstChild } = container;
    expect(firstChild).toMatchSnapshot();
  });
});
