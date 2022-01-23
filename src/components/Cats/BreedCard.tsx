import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Country } from '../../../types'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-text);
  background-color: var(--clr-bg);
  border-radius: 6px;
  text-decoration: none;
  padding: 15px;
  margin-bottom: 5px;
  transition: transform 0.1s ease-in-out, background 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.035);
    cursor: pointer;
    background: var(--clr-card-bg-hover);
    color: var(--clr-primary);
  }

  .breed-card-icon {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    border-radius: 50%;
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(2);
      transition: transform 0.1s ease-in-out;
    }
  }
  .breed-card-name {
    font-size: 1.2rem;
    margin: 0;
  }
  .breed-card-country {
    font-size: 1rem;
    margin: 0;
  }
`
const BreedCard = ({ data }) => {
    const getFlagEmoji = (countryCode: Country) => {
        const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt(0))
        return String.fromCodePoint(...codePoints)
    }
  return (
      <StyledLink to={data?.id}>
        <img
          src={data?.image?.url || `${process.env.PUBLIC_URL}/assets/img/default_cat.png`}
          alt={data?.name}
          className="breed-card-icon"
        />
          <h2 className="breed-card-country">{data?.name}</h2>
          <p>{getFlagEmoji(data?.country_code)}</p>
      </StyledLink>
  )
}

export default BreedCard
