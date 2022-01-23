import {render, screen} from '@testing-library/react'
import Search from './Search'


test('full app rendering/navigating', () => {
    render(<Search handleSearch={() => {}} data={[]} />)

expect(screen.getByLabelText('Name')).toBeInTheDocument()
expect(screen.getByLabelText('Breed')).toBeInTheDocument()

})
