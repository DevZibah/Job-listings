import './style/All.css'
import { useContext, useState, useEffect } from 'react'
import Jobs from './components/Jobs'
import data from './data.json'
import header from './images/bg-header-mobile.svg'
import header1 from './images/bg-header-desktop.svg'
import Searchedjob from './components/Searchedjob'
import { Switch, Route } from 'react-router-dom'
import { JobContext } from './contexts/JobContext'

const App = () => {
  const { key, setKey } = useContext(JobContext)
  const [newrole, setNewrole] = useState([])
  const [newlevel, setNewlevel] = useState([])
  const [newlanguage, setNewlanguage] = useState([])
  const [newtool, setNewtool] = useState([])

  const AddArray = [...newrole, ...newlevel, ...newlanguage, ...newtool]

  // This function below removes duplicate elements from the array
  const uniqueAddArray = AddArray.filter((item, index) => {
    return AddArray.indexOf(item) === index
  })
  console.log(data)
  return (
    <div className='App'>
      <header className='headerr'>
        <img className='headerr1' src={header} alt='' />
        <img className='headerr2' src={header1} alt='' />
      </header>
      <div>
        {key ? (
          <Jobs
            data={data}
            setKey={setKey}
            newrole={newrole}
            newlevel={newlevel}
            newlanguage={newlanguage}
            newtool={newtool}
            setNewrole={setNewrole}
            setNewlevel={setNewlevel}
            setNewlanguage={setNewlanguage}
            setNewtool={setNewtool}
          />
        ) : (
          <Searchedjob
            AddArray={AddArray}
            uniqueAddArray={uniqueAddArray}
            data={data}
            setKey={setKey}
            newrole={newrole}
            newlevel={newlevel}
            newlanguage={newlanguage}
            newtool={newtool}
            setNewrole={setNewrole}
            setNewlevel={setNewlevel}
            setNewlanguage={setNewlanguage}
            setNewtool={setNewtool}
          />
        )}
      </div>
    </div>
  )
}

export default App
