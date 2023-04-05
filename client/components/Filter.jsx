import React from 'react'

const Filter = ({ persons, search, searchPeople }) => (
  <>
    <div>
      filter shown with <input onChange={searchPeople} />
    </div>
    {search === '' ? (
      <p>Please enter name to filter</p>
    ) : (
      persons
        .filter((person) => person.name.includes(search))
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.phone}
          </div>
        ))
    )}
  </>
)

export default Filter
