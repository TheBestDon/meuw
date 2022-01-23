import { FunctionComponent } from 'react'
import Star from './Star'

const maxStars = 5

const StarRating: FunctionComponent<{ rating: number }> = ({ rating }) => {
  return (
    <span>
      {Array(maxStars)
        .fill(0)
        .map((_, index) => (
          <Star key={index} filled={index < rating} />
        ))}
    </span>
  )
}
export default StarRating
