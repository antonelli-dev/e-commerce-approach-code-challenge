import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "next/image";
import { CardProductItem } from "../CardProductItem";
import { ImageProps } from "next/image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    const { src, alt, width, height, ...rest } = props;
    return (
      <Image
        src={src as string}
        alt={alt || ""}
        width={width}
        height={height}
        {...rest}
      />
    );
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

describe("CardHouseItem Component", () => {
  it("renders a placeholder image if no image is provided", () => {
    const propsWithoutImage = { ...mockProps, image: undefined };
    render(<CardProductItem {...propsWithoutImage} />);

    const image = screen.getByTestId("product-image");
    expect(image).toHaveAttribute("src", "");
    expect(image).toHaveAttribute("alt", "");
  });
});
