import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Layout from '../app/dashboard/layout'
 

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), 
      removeListener: jest.fn(), 
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })

  describe('sidebar', () => {
    it('Renders a Sidebar in Dashboard Page', async () => {
      render(<Layout><div>Test Content</div></Layout>)
      
      expect(await screen.findByText('Search Flights')).toBeInTheDocument()
      expect(await screen.findByText('My Vault')).toBeInTheDocument()
      expect(await screen.findByText('Support')).toBeInTheDocument()
      expect(await screen.findByText('Contact')).toBeInTheDocument()
      expect(await screen.findByText('Sign Out')).toBeInTheDocument()
    })
  })