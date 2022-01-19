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
      console.log('Cache used')
      setBreedList(localCache['breeds'])
      setStatus('loaded')
    } else {
      void requestBreedList()
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus('loading')
      const res = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY },
      })
      const json = (await res.json()) as BreedListAPIResponse
      console.log(
        '🚀 ~ file: useBreedList.tsx ~ line 30 ~ requestBreedList ~ json',
        json
      )
      localCache['breeds'] = json || []
      setBreedList(localCache['breeds'])
      setStatus('loaded')
    }
  }, [])

  return [breedList, status]
}
