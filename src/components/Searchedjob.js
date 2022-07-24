import React from 'react'

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
    <div>
      {' '}
      <header>
        {uniqueAddArray.map((item, key) => {
          return (
            <div key={key}>
              <p>{item}</p>
              <p onClick={() => deleteItem(item)}>close</p>
            </div>
          )
        })}
        <p onClick={clearItem}>clear</p>
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
