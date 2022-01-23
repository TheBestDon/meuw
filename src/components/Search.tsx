import { useState, useEffect, FunctionComponent, ChangeEvent } from "react";
import styled from 'styled-components'
import { Breed } from "../../types";
import { useAppState } from "../state";
import Results from "./Results";

const Wrapper = styled.div`
  margin: 0 auto 35px;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 6px;
    background: var(--clr-bg);
    margin: 0px 25px 0px 0px;
    padding: 35px 0;
}
label {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
input,
select {
    height: 2rem;
    width: 100%;
    margin-left: 10px;
}

input[type="search"] {
	letter-spacing: 2px;
}
`
interface IProps {
    data: Breed[];
    handleSearch: (query: string) => void;
}

const Search: FunctionComponent<IProps> = ({ data, handleSearch }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [query, setQuery] = useState("");
  const { breeds } = useAppState()


  useEffect(() => {
    handleSearch(query)
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setBreed("")
    setName(e.target.value);
    setQuery(e.target.value);
  }
  const handleBreed = (e: ChangeEvent<HTMLSelectElement>) => {
    setName("")
    setBreed(e.target.value);
    setQuery(e.target.value);
  }

  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="search"
            value={name}
            placeholder="Search by Name"
            onChange={handleName}
          />
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={handleBreed}
            onBlur={handleBreed}
          >
            <option />
            {breeds.map((breed: Breed) => (
              <option key={breed.name} value={breed.name}>
                {breed.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <Results data={data} />
    </Wrapper>
  );
};

export default Search;
