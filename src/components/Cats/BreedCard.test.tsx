import { render } from '../../test-utils'
import { screen } from '@testing-library/react'
import { Breed } from '../../../types'
import BreedCard from './BreedCard'

const mockData: Breed = {
  adaptability: 5,
  affection_level: 5,
  alt_names: '',
  child_friendly: 4,
  country_code: 'US',
  country_codes: 'US',
  indoor: 0,
  description:
    'The, Bambino is a breed of cat that was created as a cross between the Sphynx and the Munchkin breeds. The Bambino cat has short legs, large upright ears, and is usually hairless. They love to be handled and cuddled up on the laps of their family members.',
  dog_friendly: 5,
  energy_level: 5,
  experimental: 1,
  grooming: 1,
  hairless: 1,
  health_issues: 1,
  hypoallergenic: 0,
  id: 'bamb',
  image: {
    id: '5AdhMjeEu',
    width: 1296,
    height: 1030,
    url: 'https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg'
  },
  intelligence: 5,
  lap: 1,
  life_span: '12, - 14',
  name: 'Bambino',
  natural: 0,
  origin: 'United, States',
  rare: 0,
  reference_image_id: '5AdhMjeEu',
  rex: 0,
  shedding_level: 1,
  short_legs: 1,
  social_needs: 3,
  stranger_friendly: 3,
  suppressed_tail: 0,
  temperament: 'Affectionate,, Lively, Friendly, Intelligent',
  vocalisation: 3,
  weight: { imperial: '4 - 9', metric: '2 - 4' },
  wikipedia_url: 'https,://en.wikipedia.org/wiki/Bambino_cat'
}

test('full app rendering/navigating', () => {
  render(<BreedCard data={mockData} />, {})

  const card = screen.getByRole('link')

  expect(card).toBeInTheDocument()
  expect(card).toHaveTextContent('Bambino')
})
