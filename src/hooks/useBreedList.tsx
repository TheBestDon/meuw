import { useState, useEffect } from 'react'
import { Breed, BreedListAPIResponse } from '../../types'

const localCache: {
  [index: string]: Breed[]
} = {}

type Status = 'unloaded' | 'loading' | 'loaded'

const useBreedList = (): [Breed[], Status] => {
  const [breedList, setBreedList] = useState([] as Breed[])
  const [status, setStatus] = useState('unloaded' as Status)

  const requestBreedList = async () => {
    const apiAddress: string = process.env.REACT_APP_API_URL || ''
    const apiKey: string = process.env.REACT_APP_API_KEY || ''

    setBreedList([])
    setStatus('loading')


    const res = await fetch(apiAddress, {
      headers: { 'x-api-key': apiKey }
    })
    const json = (await res.json()) as BreedListAPIResponse
    localCache['breeds'] = json || []
    setBreedList(localCache['breeds'])
    setStatus('loaded')
  }

  useEffect(() => {
    if (localCache['breeds']) {
      setBreedList(localCache['breeds'])
      setStatus('loaded')
    } else {
      requestBreedList()
    }
  }, [])

  return [breedList, status]
}
export default useBreedList
