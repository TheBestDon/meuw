import { useState, useEffect } from 'react'
import { Breed, BreedListAPIResponse } from '../../types'

const localCache: {
  [index: string]: Breed[]
} = {}

type Status = 'unloaded' | 'loading' | 'loaded'

export default function useBreedList(): [Breed[], Status] {
  const [breedList, setBreedList] = useState([] as Breed[])
  const [status, setStatus] = useState('unloaded' as Status)

  useEffect(() => {
    if (localCache['breeds']) {
      setBreedList(localCache['breeds'])
      setStatus('loaded')
    } else {
      void requestBreedList()
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus('loading')
      const res = await fetch(process.env.REACT_APP_API_URL, {
        headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY },
      })
      const json = (await res.json()) as BreedListAPIResponse
      localCache['breeds'] = json || []
      setBreedList(localCache['breeds'])
      setStatus('loaded')
    }
  }, [])

  return [breedList, status]
}
