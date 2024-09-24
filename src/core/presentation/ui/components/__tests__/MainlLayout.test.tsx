import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainLayout from '../MainLayout'; 

jest.mock('@/core/presentation/ui/components/NavMenu', () => ({
  NavMenu: () => <nav data-testid="nav-menu">NavMenu</nav>,
}));

jest.mock('@/core/presentation/ui/components/MobileMenu', () => ({
  MobileMenu: () => <nav data-testid="mobile-menu">MobileMenu</nav>,
}));

describe('MainLayout Component', () => {
  it('renders the layout with Home icon, NavMenu, and MobileMenu', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );

    const homeIcon = document.querySelector('svg.lucide-store');
    expect(homeIcon).toBeInTheDocument();

    const navMenu = screen.getByTestId('nav-menu');
    expect(navMenu).toBeInTheDocument();

    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();

    const childContent = screen.getByText('Test Content');
    expect(childContent).toBeInTheDocument();
  });

  it('applies correct styles to the layout', () => {

    const { container } = render(
      <MainLayout>
        <div>Styled Content</div>
      </MainLayout>
    );

    const layoutContainer = container.firstChild;
    expect(layoutContainer).toHaveClass('w-full h-full bg-gray-100 flex flex-col overflow-y-scroll max-h-full');

    const header = container.querySelector('div.h-16.min-h-16.bg-white.px-10.shadow-md.flex.flex-row.items-center');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('h-16 min-h-16 bg-white px-10 shadow-md flex flex-row items-center');
  });
});
