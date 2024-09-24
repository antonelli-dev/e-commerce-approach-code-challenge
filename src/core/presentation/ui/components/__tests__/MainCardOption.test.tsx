import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainMenuOptionsCard } from "../MainCardOption";

const MockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg data-testid="mock-icon" {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

describe("MainMenuOptionsCard Component", () => {
  it("renders the icon, title, and description correctly", () => {
    render(
      <MainMenuOptionsCard
        title="Dashboard"
        description="Access your dashboard"
        icon={MockIcon}
      />
    );

    const icon = screen.getByTestId("mock-icon");
    expect(icon).toBeInTheDocument();

    const titleElement = screen.getByText("Dashboard");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-xl");

    const descriptionElement = screen.getByText("Access your dashboard");
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass("text-gray-600 text-xl");
  });

  it("applies the optional iconClass correctly", () => {
    render(
      <MainMenuOptionsCard
        title="Settings"
        description="Manage your settings"
        icon={MockIcon}
        iconClass="text-blue-500"
      />
    );
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("text-blue-500");
  });

  it("applies correct styles to the container", () => {
    const { container } = render(
      <MainMenuOptionsCard
        title="Profile"
        description="Manage your profile"
        icon={MockIcon}
      />
    );
    const cardContainer = container.firstChild;
    expect(cardContainer).toHaveClass(
      "border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 bg-white w-full text-black grid grid-cols-1 grid-rows-2"
    );
  });
});
