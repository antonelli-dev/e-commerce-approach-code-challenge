import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button'; 

describe('Button Component', () => {
  it('renders the button with the correct text and style', () => {
    render(<Button text="Click Me" buttonStyle="bg-blue-500" />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-blue-500');
  });

  it('renders children instead of text when children are provided', () => {
    render(
      <Button buttonStyle="bg-blue-500">
        <span>Custom Child</span>
      </Button>
    );

    const childElement = screen.getByText('Custom Child');
    expect(childElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toHaveTextContent('Click Me');
  });

  it('triggers the onClickAction when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" buttonStyle="bg-blue-500" onClickAction={handleClick} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the default button text style if none is provided', () => {
    render(<Button text="Click Me" buttonStyle="bg-blue-500" />);
    const spanElement = screen.getByText('Click Me');
    expect(spanElement).toHaveClass('text-white font-semibold');
  });

  it('applies custom text style when provided', () => {
    render(<Button text="Click Me" buttonStyle="bg-blue-500" buttonTextStyle="text-black" />);
    const spanElement = screen.getByText('Click Me');
    expect(spanElement).toHaveClass('text-black');
  });
});
