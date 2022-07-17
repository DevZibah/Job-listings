import React, { useContext, useState } from 'react'
import { JobContext } from '../contexts/JobContext'
import Searchedjob from './Searchedjob'

const Footer = ({ item, setKey }) => {
  const [newrole, setNewrole] = useState()
  const [newlevel, setNewlevel] = useState()
  const [newlanguage, setNewlanguage] = useState()
  const [show, setShow] = useState(false)
  return (
    <div>
      <p onClick={() => (setKey(false), setNewrole(item.role))}>{item.role}</p>
      <p onClick={() => (setShow(true), setNewlevel(item.level))}>
        {item.level}
      </p>
      <p onClick={() => (setShow(true), setNewlanguage(item.languages))}>
        {item.languages}
      </p>

      <Searchedjob
        newrole={newrole}
        newlevel={newlevel}
        newlanguage={newlanguage}
        // show={show}
        // onClose={() => setShow(false)}
      />
    </div>
  )
}

export default Footer
