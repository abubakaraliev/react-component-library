import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Page } from "../..";

describe("Page", () => {
    it("renders the title and children", () => {
        // Arrange
        const title = "Test Page";
        const childText = "This is a child element";

        // Act
        const { getByText } = render(
            <Page title={title}>
                <p>{childText}</p>
            </Page>,
        );

        // Assert
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(childText)).toBeInTheDocument();
    });

    it("renders the container with correct styles", () => {
        // Arrange
        const title = "Styled Page";

        // Act
        const { container } = render(
            <Page title={title}>
                <p>Content</p>
            </Page>,
        );

        // Assert
        const pageContainer = container.firstChild;
        expect(pageContainer).toHaveStyle("background-color: #f5f5f5");
    });
});
