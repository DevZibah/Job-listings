import React from 'react'

const Searchedjob = ({ show, newrole, newlevel, newlanguage }) => {
    console.log(newrole);
//   if (!show) {
//     return null
//   }
  return (
    <div>
      <p>{newrole}</p>
      <p>{newlevel}</p>
      <p>{newlanguage}</p>
    </div>
  )
}

export default Searchedjob
