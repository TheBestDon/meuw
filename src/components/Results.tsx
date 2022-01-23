import { FunctionComponent } from 'react'
import { Breed } from '../../types'
import BreedCard from '../components/Cats/BreedCard'
import Pagination from './Pagination'
interface IProps {
    data: Breed[];
}
const Results: FunctionComponent<IProps> = ({ data }) => {
  return (
    <div className="breed-index-list">
      <Pagination
        data={data}
        RenderComponent={BreedCard}
        title="Breeds"
        pageLimit={5}
        dataLimit={10}
      />
    </div>
  )
}

export default Results
