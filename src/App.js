import './style/All.css'
import { Switch, Route } from 'react-router-dom'
import data from './data.json'
import Jobs from './components/Jobs'
import header from './images/bg-header-mobile.svg'
import Searchedjob from './components/Searchedjob'
import { useContext, useState } from 'react'
import { JobContext } from './contexts/JobContext'
const App = () => {
  const { key, setKey } = useContext(JobContext)
  const [array, setArray] = useState([])
  const [newrole, setNewrole] = useState()
  const [newlevel, setNewlevel] = useState()
  const [newlanguage, setNewlanguage] = useState()
  const [newtool, setNewtool] = useState()

  const AddArray = [newrole, newlevel, newlanguage, newtool]
  const AddToArray = () => {
    setArray(AddArray)
  }
  console.log(data)
  console.log(newlanguage)
  return (
    <div className='App'>
      <header className='border border-danger'>
        <img src={header} alt='' />
      </header>
      {/* <div>{key ? <Jobs data={data} setKey={setKey}/> : <Searchedjob />}</div> */}
      <div>
        {key ? (
          <section className='border border-dark p-4'>
            {data.map((item, key) => {
              return (
                <div key={key} className='border border-danger mt-5'>
                  <img src={item.logo} alt='logo' />
                  <p>{item.company}</p>
                  <p>{item.new === true && <p>new!</p>}</p>
                  <p>{item.featured === true && <p>featured!</p>}</p>
                  <p>{item.position}</p>
                  <p>{item.postedAt}</p>
                  <p>{item.contract}</p>
                  <p>{item.location}</p>
                  <hr />
                  <div>
                    <p
                      onClick={() => (
                        setKey(false), setNewrole(item.role)
                        // setArray(item.role)
                      )}
                    >
                      {item.role}
                    </p>
                    <p
                      onClick={() => (
                        setKey(false), setNewlevel(item.level)
                        // setArray(item.level)
                      )}
                    >
                      {item.level}
                    </p>
                    <div>
                      {item.languages.map((item, key) => {
                        return (
                          <div key={key}>
                            <p
                              onClick={() => (
                                setKey(false), setNewlanguage(item)
                              )}
                            >
                              {item}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                    <div>
                      {item.tools.map((item, key) => {
                        return (
                          <div key={key}>
                            <p
                              onClick={() => (setKey(false), setNewtool(item))}
                            >
                              {item}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        ) : (
          <div>
            <header>
              <p>{AddArray}</p>
            </header>
            <section>
              {data
                .filter((item) => {
                  if (
                    item.role === newrole
                    // item.level === newlevel ||
                    // item.language === newlanguage
                  ) {
                    return item
                  }
                })
                .map((item, key) => {
                  return (
                    <div key={key} className='border border-danger mt-5'>
                      <img src={item.logo} alt='logo' />
                      <p>{item.company}</p>
                      <p>{item.new === true && <p>new!</p>}</p>
                      <p>{item.featured === true && <p>featured!</p>}</p>
                      <p>{item.position}</p>
                      <p>{item.postedAt}</p>
                      <p>{item.contract}</p>
                      <p>{item.location}</p>
                      <hr />
                      <div>
                        <p
                          onClick={() => (setKey(false), setNewrole(item.role))}
                        >
                          {item.role}
                        </p>
                        <p
                          onClick={() => (
                            setKey(false), setNewlevel(item.level)
                          )}
                        >
                          {item.level}
                        </p>
                        <div>
                          {item.languages.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewlanguage(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          {item.tools.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewtool(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </section>
            <section>
              {data
                .filter((item) => {
                  if (item.level === newlevel) {
                    return item
                  }
                })
                .map((item, key) => {
                  return (
                    <div key={key} className='border border-danger mt-5'>
                      <img src={item.logo} alt='logo' />
                      <p>{item.company}</p>
                      <p>{item.new === true && <p>new!</p>}</p>
                      <p>{item.featured === true && <p>featured!</p>}</p>
                      <p>{item.position}</p>
                      <p>{item.postedAt}</p>
                      <p>{item.contract}</p>
                      <p>{item.location}</p>
                      <hr />
                      <div>
                        <p
                          onClick={() => (setKey(false), setNewrole(item.role))}
                        >
                          {item.role}
                        </p>
                        <p
                          onClick={() => (
                            setKey(false), setNewlevel(item.level)
                          )}
                        >
                          {item.level}
                        </p>
                        <div>
                          {item.languages.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewlanguage(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          {item.tools.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewtool(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </section>
            <section>
              {data
                .filter((item) => {
                  if (item.languages.includes(newlanguage)) {
                    return item
                  }
                })
                .map((item, key) => {
                  return (
                    <div key={key} className='border border-danger mt-5'>
                      <img src={item.logo} alt='logo' />
                      <p>{item.company}</p>
                      <p>{item.new === true && <p>new!</p>}</p>
                      <p>{item.featured === true && <p>featured!</p>}</p>
                      <p>{item.position}</p>
                      <p>{item.postedAt}</p>
                      <p>{item.contract}</p>
                      <p>{item.location}</p>
                      <hr />
                      <div>
                        <p
                          onClick={() => (setKey(false), setNewrole(item.role))}
                        >
                          {item.role}
                        </p>
                        <p
                          onClick={() => (
                            setKey(false), setNewlevel(item.level)
                          )}
                        >
                          {item.level}
                        </p>
                        <div>
                          {item.languages.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewlanguage(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          {item.tools.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewtool(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </section>
            <section>
              {data
                .filter((item) => {
                  if (item.tools.includes(newtool)) {
                    return item
                  }
                })
                .map((item, key) => {
                  return (
                    <div key={key} className='border border-danger mt-5'>
                      <img src={item.logo} alt='logo' />
                      <p>{item.company}</p>
                      <p>{item.new === true && <p>new!</p>}</p>
                      <p>{item.featured === true && <p>featured!</p>}</p>
                      <p>{item.position}</p>
                      <p>{item.postedAt}</p>
                      <p>{item.contract}</p>
                      <p>{item.location}</p>
                      <hr />
                      <div>
                        <p
                          onClick={() => (setKey(false), setNewrole(item.role))}
                        >
                          {item.role}
                        </p>
                        <p
                          onClick={() => (
                            setKey(false), setNewlevel(item.level)
                          )}
                        >
                          {item.level}
                        </p>
                        <div>
                          {item.languages.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewlanguage(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          {item.tools.map((item, key) => {
                            return (
                              <div key={key}>
                                <p
                                  onClick={() => (
                                    setKey(false), setNewtool(item)
                                  )}
                                >
                                  {item}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </section>
          </div>
        )}
      </div>
      {/* <Switch>
        <Route exact path='/'>
          <Jobs data={data} />
        </Route>
        <Route exact path='/SearchedJob'>
          <Searchedjob />
        </Route>
      </Switch> */}
    </div>
  )
}

export default App
