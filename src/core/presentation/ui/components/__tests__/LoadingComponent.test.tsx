import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingComponent from "../LoadingComponent";

describe("LoadingComponent", () => {
  it("renders the loading spinner correctly", () => {
    render(<LoadingComponent />);

    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();

    expect(spinner).toHaveClass(
      "animate-spin h-16 w-16 border-t-4 border-b-4 border-blue-500"
    );
  });

  it("applies the correct layout classes for centering and background", () => {
    const { container } = render(<LoadingComponent />);

    const outerContainer = container.firstChild;
    expect(outerContainer).toHaveClass(
      "flex items-center justify-center bg-gray-100 z-50 w-full h-full relative"
    );
  });
});
