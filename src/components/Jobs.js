import React from 'react'

const Jobs = ({
  data,
  setKey,
  newrole,
  newlevel,
  newlanguage,
  newtool,
  setNewrole,
  setNewlevel,
  setNewlanguage,
  setNewtool,
}) => {
  return (
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
                          setKey(false), setNewlanguage([...newlanguage, item])
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
  )
}

export default Jobs
