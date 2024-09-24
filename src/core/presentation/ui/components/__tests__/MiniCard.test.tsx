import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MiniCard } from '../MiniCard'; 

const MockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg data-testid="mock-icon" {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

describe('MiniCard Component', () => {
  it('renders the icon, text, and description correctly', () => {

    render(
      <MiniCard
        icon={MockIcon}
        text="Test Card"
        description="This is a test description"
      />
    );

 
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();


    const textElement = screen.getByText('Test Card');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('text-black font-bold');


    const descriptionElement = screen.getByText('This is a test description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass('text-gray-600 text-sm');
  });

  it('applies correct styles to container and icon', () => {

    render(
      <MiniCard
        icon={MockIcon}
        text="Styled Card"
        description="Testing styles"
      />
    );

    const container = screen.getByText('Styled Card').parentElement?.parentElement;
    expect(container).toHaveClass('flex flex-row gap-3 w-fit h-fit items-center bg-white p-5 px-10 shadow-sm hover:shadow-md transition-shadow duration-300');

 
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toHaveClass('text-blue-600 h-10 w-10');
  });
});
