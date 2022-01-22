import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Breed } from '../../../types'
import { useAppState } from '../../state'
import Loader from '../Loader'
import Search from '../Search'

const Wrapper = styled.div`
  .breed-index-list {
    margin-top: 10px;
  }

  .breed-index-radios {
    display: flex;
    align-items: center;
    span {
      width: 35px;
      color: #fff;
      margin-right: 10px;
    }
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`
const BreedIndex: FunctionComponent = () => {
  const { breeds, status } = useAppState()
  const [data, setData] = useState(breeds)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setData(breeds)
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps



  const handleSearch = (query: string): void => {
      if(query.length < 3) {
        setData(breeds)
        return
      }
    const filtered = breeds.filter(breed => breed.name.toLowerCase().includes(query.toLowerCase()))
    setData(filtered)
  }

  const sortBreedsFromParams = (
    data: Breed[],
    params: { [x: string]: string; sort?: string; order?: string }
  ) => {
    if (!Object.keys(params).length) {
      setData(data)
      return
    }
    const sortedData = data.sort((a, b) => {
      const { sort, order } = params
      switch (order) {
        case 'ascending':
          return a[sort] > b[sort] ? 1 : -1
        case 'descending':
          return a[sort] < b[sort] ? 1 : -1

        default: {
          return 0
        }
      }
    })
    setData(sortedData)
  }

  const updateParams = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    const params = Object.fromEntries(searchParams)
    const newParams = { ...params, [name]: value }
    setSearchParams(newParams)
    sortBreedsFromParams(data, newParams)
  }

  if(status !== 'loaded') {
      return <Loader />
  }

  return (
    <Wrapper>
      <Search handleSearch={handleSearch} data={data} />
      <div className="breed-index-radios">
        <span>Sort:</span>
        <label>
          Name
          <input
            type="radio"
            name="sort"
            value="name"
            onChange={updateParams}
            defaultChecked={searchParams.get('sort') === 'name'}
          />
        </label>
        <label>
          Country
          <input
            type="radio"
            name="sort"
            value="country_code"
            onChange={updateParams}
            defaultChecked={searchParams.get('sort') === 'country_code'}
          />
        </label>
      </div>
      <div className="breed-index-radios">
        <span>Order:</span>
        <label>
          Ascending
          <input
            type="radio"
            name="order"
            value="ascending"
            onChange={updateParams}
            defaultChecked={searchParams.get('order') === 'ascending'}
          />
        </label>
        <label>
          Descending
          <input
            type="radio"
            name="order"
            value="descending"
            onChange={updateParams}
            defaultChecked={searchParams.get('order') === 'descending'}
          />
        </label>
      </div>
    </Wrapper>
  )
}

export default BreedIndex
