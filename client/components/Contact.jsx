import React from 'react'

const Contact = ({ persons, deleteContact }) => (
  <>
    {persons.map((person) => (
      <div key={person.id}>
        {person.name} {person.phone}{' '}
        <button id={person.id} type="button" onClick={deleteContact}>
          delete
        </button>
      </div>
    ))}
  </>
)

export default Contact
