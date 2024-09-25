import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavMenu } from "../NavMenu";

jest.mock("@/core/application/config/menu.config", () => ({
  menuConfig: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
}));

describe("NavMenu Component", () => {
  it("renders the correct number of links", () => {
    render(<NavMenu />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3); 
  });

  it("renders the correct href and text for each link", () => {
    const { container } = render(<NavMenu />);
    const elementsArray = container.querySelectorAll("a");

    elementsArray.forEach((element) => {
      const spanValue = element.querySelector("span")?.textContent;

      switch (spanValue) {
        case "Home":
          expect(element).toHaveAttribute("href", "/");
          break;
        case "About":
          expect(element).toHaveAttribute("href", "/about");
          break;
        case "Contact":
          expect(element).toHaveAttribute("href", "/contact");
          break;
        default:
          throw new Error(`Unexpected link text: ${spanValue}`); 
      }
    });
  });

  it("has proper classes for links and hover effects", () => {
    const { container } = render(<NavMenu />);

    const homeLink = container.querySelector("a");
    expect(homeLink).toHaveClass("text-gray-500");
    expect(homeLink).toHaveClass("hover:text-gray-700");
    expect(homeLink).toHaveClass("hover:scale-110");
    expect(homeLink).toHaveClass("hover:underline");
  });
});
