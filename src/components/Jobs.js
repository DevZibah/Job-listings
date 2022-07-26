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
    <section className='border border-dark p-3'>
      {data.map((item, key) => {
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
            <div className='image'>
              <img src={item.logo} alt='logo' />
            </div>
            <div className='grid1 mt-1'>
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
                className=''
                style={{
                  border:
                    item.new === true ? '1px solid hsl(180, 29%, 50%)' : 'none',
                  backgroundColor:
                    item.new === true ? 'hsl(180, 29%, 50%)' : 'none',
                  color: item.new === true ? 'white' : 'none',
                  fontSize: item.new === true ? '14px' : 'none',
                  fontWeight: item.new === true ? '600' : 'none',
                  textTransform: item.new === true ? 'uppercase' : 'none',
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
                className=''
                style={{
                  border:
                    item.featured === true
                      ? '1px solid hsl(180, 14%, 20%)'
                      : 'none',
                  backgroundColor:
                    item.featured === true ? 'hsl(180, 14%, 20%)' : 'none',
                  color: item.featured === true ? 'white' : 'none',
                  fontSize: item.featured === true ? '14px' : 'none',
                  fontWeight: item.featured === true ? '600' : 'none',
                  textTransform: item.featured === true ? 'uppercase' : 'none',
                  width: item.featured === true ? '6rem' : 'none',
                  padding: item.featured === true ? '.3rem' : 'none',
                  borderRadius: item.featured === true ? '1rem' : 'none',
                  height: item.featured === true ? '2rem' : 'none',
                  textAlign: item.featured === true ? 'center' : 'none',
                }}
              >
                {item.featured === true && <p>featured</p>}
              </p>
            </div>
            <p className='position'>{item.position}</p>
            <div className='grid2'>
              <p>{item.postedAt}</p>
              <li className='ml-3'>{item.contract}</li>
              <li className='ml-3'>{item.location}</li>
            </div>
            <hr />
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
                    setKey(false), setNewlevel([...newlevel, item.level])
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
                          setKey(false), setNewlanguage([...newlanguage, item])
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
        )
      })}
    </section>
  )
}

export default Jobs
