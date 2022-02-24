import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
    it("should render PostCard correctly", () => {
        render(<PostCard {...props} />);
        expect(screen.getByAltText(props.title)).toHaveAttribute(
            "src",
            props.cover
        ); // verificando o atributo
        expect(
            screen.getByRole("heading", { name: /title 1/i })
        ).toBeInTheDocument(); // se existe no documento
        expect(screen.getByText("body 1")).toBeInTheDocument(); // get por texto
    });

    // criando teste de snapshot
    it("should match snapshot", () => {
        const { container } = render(<PostCard {...props} />); // o primeiro filho é o componente
        expect(container.firstChild).toMatchSnapshot();
    });
});
