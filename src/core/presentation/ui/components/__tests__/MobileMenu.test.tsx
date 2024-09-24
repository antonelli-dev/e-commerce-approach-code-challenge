import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MobileMenu } from "../MobileMenu"; 

jest.mock('@/core/application/config/menu.config', () => ({
  menuConfig: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
}));

describe('MobileMenu Component', () => {
  it('opens the menu when clicking the hamburger icon', () => {
    render(<MobileMenu />);

    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });

  it('closes the menu when clicking the XIcon', () => {
    render(<MobileMenu />);

    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);

  
    expect(screen.getByText('Home')).toBeInTheDocument();

    const closeButton = screen.getAllByRole('button')[1];
    fireEvent.click(closeButton);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });

  it('renders the correct number of links', () => {
    render(<MobileMenu />);

    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3); 
  });

  it('renders the correct href and text for each link', () => {
    render(<MobileMenu />);

    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
