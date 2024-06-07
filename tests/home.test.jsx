import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Home from '../src/components/home.jsx'

describe("Home", () => {
    it("renders", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    })
})