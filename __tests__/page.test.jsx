import '@testing-library/jest-dom'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import LoginCard from '../app/components/LoginCard'
 
describe('Page', () => {
  it('Renders a Loginbar in Home Page', () => {
    render(<Page />)
 
 
    expect(screen.getByText('Enter Your Volare Account via Google')).toBeInTheDocument()
  })
})