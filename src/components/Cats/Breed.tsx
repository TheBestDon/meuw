import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppState } from '../../state'
import Loader from '../Loader'
import StarRating from '../StarRating'

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
    font-size: var(--h3);
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
const Properties = styled.ul`
  list-style: none;
  margin: 50px 0;
  padding-left: 1.2rem;

  li {
    position: relative;
    list-style-type: none;
    padding-left: 2.5rem;
    margin-bottom: 0.5rem;
  }
  li:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -2px;
    width: 5px;
    height: 11px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    border-color: var(--clr-secondary);
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`

const formatName = (name: string) => {
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const Breed: FunctionComponent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { breeds } = useAppState()
  const [breed, setBreed] = useState(null)
  const [props, setProps] = useState([])

  useEffect(() => {
    const breed = breeds.find((b) => b.id === id)
    const props = Object.entries(breed)
      .filter(([key, value]) => typeof value === 'number' && value > 0)
      .map(([key, value]) => ({ key, value }))
    setBreed(breed)
    setProps(props)
  }, [id, breeds])

  if (breed === null) {
    return <Loader />
  }

  return (
    <Wrapper>
      <div className="breed-title">
        <img
          src={breed?.image?.url || `${process.env.PUBLIC_URL}/assets/img/default_cat.png`}
          alt={breed?.name}
          className="breed-image"
        />
        <div>
          <h1 className="breed-name">{breed?.name}</h1>
        </div>
      </div>
      <div className="breed-description">
        <p>{breed?.description}</p>
        <p>{breed?.temperament}</p>
        <Properties>
          {props.map(({ key, value }) => (
            <li key={key}>
              {formatName(key)}: <StarRating rating={value} />
            </li>
          ))}
        </Properties>
        <button className="breed-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </Wrapper>
  )
}

export default Breed
