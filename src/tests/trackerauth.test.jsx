import { render, getByRole, screen, configure } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from "../App"

describe("TrackerPage", () => {
    it('Does something', () => {
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )

        expect(screen.getByRole('button').toHaveTextContent('login'))
    })
})