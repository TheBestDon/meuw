import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppState } from '../../state'
import Loader from '../Loader'

const Wrapper = styled.div`
  color: var(--clr-text);
  background-color: var(--clr-bg);
  border-radius: 6px;
  padding: 15px;

  .breed-title {
    display: flex;
  }
  .breed-image {
    width: 150px;
    margin-right: 15px;
  }
  .breed-name {
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0;
  }

  .breed-button {
    border: 2px solid var(--clr-primary);
    color: var(--clr-primary);
    background: none;
    padding: 10px 15px;
    margin-right: 5px;
    border-radius: 6px;
    outline: 0;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const Breed: FunctionComponent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { breeds } = useAppState()
  const [breed, setBreed] = useState(null)

  useEffect(() => {
    const breed = breeds.find((b) => b.id === id)
    setBreed(breed)
  }, [id, breeds])

  if (breed === null) {
    return <Loader />
  }

  return (
    <Wrapper>
      <div className="breed-title">
        <img
          src={breed?.image?.url || '/assets/img/default_cat.png'}
          alt={breed?.name}
          className="breed-image"
        />
        <div>
          <h1 className="breed-name">{breed?.name}</h1>
        </div>
      </div>
      <div className="breed-description">
        <p>{breed?.description}</p>
        <button className="breed-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </Wrapper>
  )
}

export default Breed
