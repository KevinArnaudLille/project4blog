import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe('Footer',() => {
    test('should render without crash', async () => {
        render(<Footer/>);
    })
    test('should display -Kevin Arnaud @ 2022-', async () => {
        render(<Footer/>);
        const div = screen.getByText(/Kevin Arnaud/);
        expect(div.textContent).toContain("2022")
    })
    
})