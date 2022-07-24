// storeContext contains our data from data.json
import React, { useState, createContext, useEffect, useContext } from 'react'

export const JobContext = createContext()

const JobContextProvider = ({ children }) => {
  const [key, setKey] = useState(true)
  // the array of data to hold the json data provided, data here as an array is empty.

  return (
    <JobContext.Provider
      value={{
        key,
        setKey,
      }}
    >
      {children}
    </JobContext.Provider>
  )
}

export default JobContextProvider
