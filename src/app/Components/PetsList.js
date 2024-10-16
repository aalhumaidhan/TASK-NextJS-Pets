"use client";

import { useState } from "react";
import PetsQuery from "./PetsQuery";
import PetItem from "./PetItem";

function PetsList({ pets }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  const petList = pets
    .filter((pet) => {
      const foundQuery = pet.name.toLowerCase().includes(query.toLowerCase());
      const isType = pet.type === type || type === "";
      return isType && foundQuery;
    })
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <>
      <PetsQuery
        type={type}
        handleSearch={handleSearch}
        handleType={handleType}
      />
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
