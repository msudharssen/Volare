import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/dashboard/contact/page'
  
  describe('Contact', () => {
    test("renders with correct label", () => {
        render(<Page label="Click me" />);
        expect(screen.getByText("First Name")).toBeInTheDocument();
        expect(screen.getByText("Last Name")).toBeInTheDocument();
        expect(screen.getByText("Email Address")).toBeInTheDocument();
        expect(screen.getByText("Message")).toBeInTheDocument();
      });
    
  })