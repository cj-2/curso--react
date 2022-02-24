import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput />", () => {
    it("should have a value of serachValue", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={"test value"} />);
        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe("test value");
    });

    it("should call handleChange function on each key passed", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} />);
        const input = screen.getByPlaceholderText(/type your search/i);

        const value = "search value";
        userEvent.type(input, value); // digitando no componente.

        expect(input.value).toBe(value);
        expect(fn).toBeCalledTimes(value.length);
    });

    it("should match snapshot", () => {
        const { container } = render(<TextInput />);
        const { firstChild } = container;
        expect(firstChild).toMatchSnapshot();
    });
});
