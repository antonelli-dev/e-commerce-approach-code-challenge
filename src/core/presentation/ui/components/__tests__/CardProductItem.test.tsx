import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardProductItem } from "../CardProductItem";
import { ImageProps } from "next/image";

/* eslint-disable @next/next/no-img-element */

type MockImageProps = Omit<ImageProps, "src"> & { 
  src: string;
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: MockImageProps) => {
    const imageSrc = src || "/placeholder.jpg";
    return <img src={imageSrc} alt={alt} {...props} data-testid="product-image" />;
  },
}));

const mockProps = {
  productId: 1,
  title: "Beautiful House",
  image: "/house.jpg",
  address: "123 Main St, City, Country",
  price: 1000000,
  isProductInCart: false,
  onClickAddToCart: jest.fn(),
  onRemoveItem: jest.fn(),
};

describe("CardProductItem Component", () => {
  it("renders the product image correctly", () => {
    render(<CardProductItem {...mockProps} />);

    const image = screen.getByTestId("product-image");

    expect(image).toHaveAttribute("src", "/house.jpg");
    expect(image).toHaveAttribute("alt", "Beautiful House");
  });

  it("renders a placeholder image if no image is provided", () => {
    const propsWithoutImage = { ...mockProps, image: undefined };
    render(<CardProductItem {...propsWithoutImage} />);

    const image = screen.getByTestId("product-image");

    expect(image).toHaveAttribute("src", "/placeholder.jpg");
    expect(image).toHaveAttribute("alt", "no image available"); 
  });

  it("renders the add to cart button when the product is not in the cart", () => {
    render(<CardProductItem {...mockProps} />);

    const button = screen.getByText("Add To Cart");
    expect(button).toBeInTheDocument();
  });

  it("renders the remove button when the product is in the cart", () => {
    const propsInCart = { ...mockProps, isProductInCart: true };
    render(<CardProductItem {...propsInCart} />);

    const button = screen.getByText("Remove");
    expect(button).toBeInTheDocument();
  });

  it("renders the price if it is provided", () => {
    render(<CardProductItem {...mockProps} />);

    const price = screen.getByText("$1000000");
    expect(price).toBeInTheDocument();
  });

  it("does not render the price if it is zero", () => {
    const propsWithoutPrice = { ...mockProps, price: 0 };
    render(<CardProductItem {...propsWithoutPrice} />);

    const price = screen.queryByText("$0");
    expect(price).not.toBeInTheDocument();
  });

  it("renders the 'See All Products' link in demo mode", () => {
    const propsInDemo = { ...mockProps, isDemo: true };
    render(<CardProductItem {...propsInDemo} />);

    const link = screen.getByText("See All Products");
    expect(link).toBeInTheDocument();
  });
});
