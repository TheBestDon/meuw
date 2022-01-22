import React, { createContext, FunctionComponent, useContext } from 'react';
import useBreedList from '../hooks/useBreedList';

export const AppContext = createContext({
    breeds: [],
    status: 'unloaded'
});

export const PageWrapper: FunctionComponent = ({ children }) => {
    const [breedList, status] = useBreedList()

    const store = {
        breeds: breedList,
        status
    }


  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
    return useContext(AppContext);
}
