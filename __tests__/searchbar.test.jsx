import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Searchbar from '../app/components/Searchbar'
  
  describe('searchbar', () => {
    it('Renders a searchbar in Dashboard Search Page', async () => {
      render(<Searchbar/>)
    
      const button = screen.getByRole('button', {name: /Search/i})
      const input = screen.getByRole('searchbox')
      expect(button).toBeInTheDocument()
      expect(input).toBeInTheDocument()
    })
  })