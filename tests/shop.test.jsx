import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from '../src/components/shop.jsx'
describe("Shop", () => {
    it("renders", () => {
        const { container } = render(<Shop />);
        expect(container).toMatchSnapshot();
    })
})