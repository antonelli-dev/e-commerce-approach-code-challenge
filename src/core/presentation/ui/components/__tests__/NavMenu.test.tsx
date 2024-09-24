import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavMenu } from '../NavMenu'; 

jest.mock('@/core/application/config/menu.config', () => ({
  menuConfig: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
}));

describe('NavMenu Component', () => {
  it('renders the correct number of links', () => {
    render(<NavMenu />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3); 
  });

  it('renders the correct href and text for each link', () => {
 
    render(<NavMenu />);

   
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

  it('has proper classes for links and hover effects', () => {

    render(<NavMenu />);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveClass('text-gray-500');
    expect(homeLink).toHaveClass('hover:text-gray-700');
    expect(homeLink).toHaveClass('hover:scale-110');
    expect(homeLink).toHaveClass('hover:underline');
  });
});
