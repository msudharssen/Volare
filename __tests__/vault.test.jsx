import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/dashboard/vault/page'
  
  describe('Vault', () => {
    test("renders with correct label", () => {
        render(<Page label="Click me" />);
        expect(screen.getByText("Most Visited City")).toBeInTheDocument();
        expect(screen.getByText("Total Trips Completed")).toBeInTheDocument();
        expect(screen.getByText("Most Travelled Airline")).toBeInTheDocument();
        expect(screen.getByText("Most Trips In A Single Year")).toBeInTheDocument();
        expect(screen.getByText("Trip Name")).toBeInTheDocument();
        expect(screen.getByText("Departure City")).toBeInTheDocument();
        expect(screen.getByText("Departure Date")).toBeInTheDocument();
        expect(screen.getByText("Departure Time")).toBeInTheDocument();
        expect(screen.getByText("Arrival City")).toBeInTheDocument();
        expect(screen.getByText("Arrival Date")).toBeInTheDocument();
        expect(screen.getByText("Arrival Time")).toBeInTheDocument();
        expect(screen.getByText("Action")).toBeInTheDocument();
      });
    
  })