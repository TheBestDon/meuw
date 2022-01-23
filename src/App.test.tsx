import {render, screen} from '@testing-library/react'


import '@testing-library/jest-dom'

import App from './App'

test('full app rendering/navigating', () => {
    render(<div id='root' className='dark'>
        <App />
        </div>)

  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByAltText('Cat Breeds')).toBeInTheDocument()

//   const leftClick = {button: 0}
//   userEvent.click(screen.getByText(/about/i), leftClick)

  // check that the content changed to the new page
//   expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})
