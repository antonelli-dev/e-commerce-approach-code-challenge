import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainBanner from "../MainBanner";

jest.mock("next/image", () => ({
  __esModule: true,
  default: jest.fn(() => <img data-testid="banner-image" alt="banner-image" />),
}));

describe("MainBanner Component", () => {
  it("renders the heading, paragraph, button, and image correctly", () => {
    render(<MainBanner />);

    const heading = screen.getByRole("heading", { name: /summer collection/i });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/discover our latest arrivals/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass(
      "mt-4 max-w-3xl text-lg sm:text-xl text-blue-100"
    );

    const button = screen.getByRole("button", { name: /shop now/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Shop Now");
    expect(button).toHaveClass(
      "rounded-md bg-white text-blue-600 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-50 w-48 h-full"
    );

    const image = screen.getByTestId("banner-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "banner-image");
  });

  it("applies correct layout classes", () => {
    const { container } = render(<MainBanner />);

    const bannerContainer = container.firstChild;
    expect(bannerContainer).toHaveClass(
      "flex flex-col md:flex-row rounded-md my-5 bg-gradient-to-r from-blue-500 to-purple-600 px-10 gap-16 h-fit py-16"
    );
  });
});
