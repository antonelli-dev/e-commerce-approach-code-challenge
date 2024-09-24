import { render, screen, fireEvent } from "@testing-library/react";
import ProductModal from "../ProductModal";
import "@testing-library/jest-dom";
import { Product } from "@/core/domain/entities/Product";

let mockAddCartItem: jest.Mock;
let mockModifyQuantity: jest.Mock;

jest.mock("@/core/application/store/cart.store", () => ({
  useCartStore: () => ({
    addCartItem: mockAddCartItem,
    modifyQuantity: mockModifyQuantity,
    cart: {
      items: [],
    },
  }),
}));

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  description: "This is a test product",
  price: 100,
  image: "http://example.com/image.jpg",
};

describe("ProductModal Component", () => {
  beforeEach(() => {
    mockAddCartItem = jest.fn();
    mockModifyQuantity = jest.fn();
  });

  it("renders modal when open", () => {
    render(
      <ProductModal isOpen={true} product={mockProduct} onClose={jest.fn()} />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByText("Price: $100")).toBeInTheDocument();
  });

  it("does not render modal when closed", () => {
    const { container } = render(
      <ProductModal isOpen={false} product={mockProduct} onClose={jest.fn()} />
    );

    const div = container.querySelector("div");
    expect(div).toHaveClass("hidden");
  });

  it("decrements quantity but cannot go below 1", () => {
    const { container } = render(
      <ProductModal isOpen={true} product={mockProduct} onClose={jest.fn()} />
    );

    const decrementButton = container.querySelector(".lucide-minus");
    const amountSpan = container.querySelector("span");

    fireEvent.click(decrementButton!);
    expect(amountSpan?.textContent).toEqual("1");
  });

  it("calls addCartItem when adding product to cart", () => {
    const { container } = render(
      <ProductModal isOpen={true} product={mockProduct} onClose={jest.fn()} />
    );

    const addButton = container.querySelector("button");
    fireEvent.click(addButton!);

    expect(mockAddCartItem).toHaveBeenCalledTimes(1);
  });
});
