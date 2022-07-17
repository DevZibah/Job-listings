// storeContext contains our data from data.json
import React, { useState, createContext, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'

export const JobContext = createContext()

const JobContextProvider = ({ children }) => {
  const [array, setArray] = useState([])
  const [newrole, setNewrole] = useState()
  const [key, setKey] = useState(true)
  return (
    <JobContext.Provider
      value={{
        data,
        key,
        setKey,
        setNewrole,
      }}
    >
      {children}
    </JobContext.Provider>
  )
}

export default JobContextProvider
