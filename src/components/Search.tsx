import { useState, useEffect } from "react";
import styled from 'styled-components'
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
    color: var(--clr-secondary);
	letter-spacing: 2px;
	text-shadow: 0 0 2px var(--black);
}
`

const Search = ({ data, handleSearch }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [query, setQuery] = useState("");
  const { breeds } = useAppState()


  useEffect(() => {
    handleSearch(query)
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleName = (e) => {
    setBreed("")
    setName(e.target.value);
    setQuery(e.target.value);
  }
  const handleBreed = (e) => {
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
            {breeds.map((breed) => (
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
