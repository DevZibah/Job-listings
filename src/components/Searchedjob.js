import React from 'react'
import close from '../images/icon-remove.svg'

const Searchedjob = ({
  data,
  setKey,
  uniqueAddArray,
  newrole,
  newlevel,
  newlanguage,
  newtool,
  setNewrole,
  setNewlevel,
  setNewlanguage,
  setNewtool,
  AddArray,
}) => {
  // This function is to delete items from the array
  const deleteItem = (item) => {
    if (newrole.includes(item)) {
      setNewrole(newrole.filter((el) => el !== item))
    } else if (newlevel.includes(item)) {
      setNewlevel(newlevel.filter((el) => el !== item))
    } else if (newlanguage.includes(item)) {
      setNewlanguage(newlanguage.filter((el) => el !== item))
    } else if (newtool.includes(item)) {
      setNewtool(newtool.filter((el) => el !== item))
    }
  }

  if (uniqueAddArray.length == 0) {
    setKey(true)
  }
  const clearItem = () => {
    setNewrole([])
    setNewlevel([])
    setNewlanguage([])
    setNewtool([])
    setKey(true)
  }
  console.log(uniqueAddArray)
  return (
    <div className='border border-dark p-3 p-md-5'>
      {' '}
      <header className='bg-white main-header p-3 mt-n3'>
        {uniqueAddArray.map((item, key) => {
          return (
            <div key={key} className='flexx'>
              <p className='itemm p-1'>{item}</p>
              <div className='fleximg'>
                <img
                  className='mt-1'
                  onClick={() => deleteItem(item)}
                  src={close}
                  alt='close'
                />
              </div>
            </div>
          )
        })}
        <p className='cleear mt-1' onClick={clearItem}>
          Clear
        </p>
      </header>
      <section>
        {data
          .filter((item) => {
            if (uniqueAddArray.includes(item.role)) {
              return item
            } else if (uniqueAddArray.includes(item.level)) {
              return item
            } else if (AddArray.includes(...item.languages)) {
              return item
            } else if (AddArray.includes(...item.tools)) {
              return item
            } else if (
              uniqueAddArray.includes(item.role) &&
              uniqueAddArray.includes(item.level) &&
              AddArray.includes(...item.languages) &&
              AddArray.includes(...item.tools)
            ) {
              return item
            }
          })
          .map((item, key) => {
            return (
              <div
                key={key}
                className='mt-5 main-div p-3'
                style={{
                  borderLeft:
                    item.id === 1
                      ? '7px solid hsl(180, 29%, 50%)'
                      : item.id === 2
                      ? '7px solid hsl(180, 29%, 50%)'
                      : 'none',
                }}
              >
                <main className='grid5'>
                  <section className='sec-one'>
                    <div className='image'>
                      <img src={item.logo} alt='logo' />
                    </div>
                    <div className='grid6 ml-md-3'>
                      <div className='grid1 mt-1 mt-md-3'>
                        <p
                          className='footPone mt-1'
                          style={{
                            width:
                              item.company === 'Loop Studios'
                                ? '8rem'
                                : item.company === 'Eyecam Co.'
                                ? '7rem'
                                : item.company === 'The Air Filter Company'
                                ? '13rem'
                                : 'none',
                          }}
                        >
                          {item.company}
                        </p>
                        <p
                          style={{
                            border:
                              item.new === true
                                ? '1px solid hsl(180, 29%, 50%)'
                                : 'none',
                            backgroundColor:
                              item.new === true ? 'hsl(180, 29%, 50%)' : 'none',
                            color: item.new === true ? 'white' : 'none',
                            fontSize: item.new === true ? '14px' : 'none',
                            fontWeight: item.new === true ? '600' : 'none',
                            textTransform:
                              item.new === true ? 'uppercase' : 'none',
                            width: item.new === true ? '3.6rem' : 'none',
                            padding: item.new === true ? '.3rem' : 'none',
                            borderRadius: item.new === true ? '1rem' : 'none',
                            height: item.new === true ? '2rem' : 'none',
                            textAlign: item.new === true ? 'center' : 'none',
                          }}
                        >
                          {item.new === true && <p>new!</p>}
                        </p>
                        <p
                          style={{
                            border:
                              item.featured === true
                                ? '1px solid hsl(180, 14%, 20%)'
                                : 'none',
                            backgroundColor:
                              item.featured === true
                                ? 'hsl(180, 14%, 20%)'
                                : 'none',
                            color: item.featured === true ? 'white' : 'none',
                            fontSize: item.featured === true ? '14px' : 'none',
                            fontWeight: item.featured === true ? '600' : 'none',
                            textTransform:
                              item.featured === true ? 'uppercase' : 'none',
                            width: item.featured === true ? '6rem' : 'none',
                            padding: item.featured === true ? '.3rem' : 'none',
                            borderRadius:
                              item.featured === true ? '1rem' : 'none',
                            height: item.featured === true ? '2rem' : 'none',
                            textAlign:
                              item.featured === true ? 'center' : 'none',
                          }}
                        >
                          {item.featured === true && <p>featured!</p>}
                        </p>
                      </div>
                      <p className='position  mt-md-n2'>{item.position}</p>
                      <div className='grid2  mt-md-n2'>
                        <p>{item.postedAt}</p>
                        <li className='ml-3'>{item.contract}</li>
                        <li className='ml-3'>{item.location}</li>
                      </div>
                    </div>
                  </section>
                  <div>
                    <hr className='hline' />
                    <div className='grid4'>
                      <div className='grid3'>
                        <p
                          className='footP p-1'
                          onClick={() => (
                            setKey(false), setNewrole([...newrole, item.role])
                          )}
                        >
                          {item.role}
                        </p>
                        <p
                          className='footP p-1'
                          onClick={() => (
                            setKey(false),
                            setNewlevel([...newlevel, item.level])
                          )}
                        >
                          {item.level}
                        </p>
                      </div>
                      <div className='grid3'>
                        {item.languages.map((item, key) => {
                          return (
                            <div key={key}>
                              <p
                                className='footP p-1'
                                onClick={() => (
                                  setKey(false),
                                  setNewlanguage([...newlanguage, item])
                                )}
                              >
                                {item}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                      <div className='grid3'>
                        {item.tools.map((item, key) => {
                          return (
                            <div key={key}>
                              <p
                                className='footP p-1'
                                onClick={() => (
                                  setKey(false), setNewtool([...newtool, item])
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
                </main>
              </div>
            )
          })}
      </section>
      {/* <section>
        {data
          .filter((item) => {
            if (uniqueAddArray.includes(item.level)) {
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
                    onClick={() => (
                      setKey(false), setNewrole([...newrole, item.role])
                    )}
                  >
                    {item.role}
                  </p>
                  <p
                    onClick={() => (
                      setKey(false), setNewlevel([...newlevel, item.level])
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
                              setKey(false),
                              setNewlanguage([...newlanguage, item])
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
                              setKey(false), setNewtool([...newtool, item])
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
      </section> */}
    </div>
  )
}

export default Searchedjob
