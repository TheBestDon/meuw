import React, { createContext, FunctionComponent, useContext } from 'react';
import { Breed } from '../../types';
import useBreedList from '../hooks/useBreedList';

type StoreType = {
    breeds: Breed[];
    status: 'unloaded' | 'loading' | 'loaded';
}

export const AppContext = createContext<StoreType>({
    breeds: [],
    status: 'unloaded'
});

export const PageWrapper: FunctionComponent = ({ children }) => {
    const [breedList, status] = useBreedList()

    const store: StoreType = {
        breeds: breedList,
        status
    }


  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
    return useContext(AppContext);
}
