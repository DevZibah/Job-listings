import React from 'react'
import Footer from './Footer'
const Jobs = ({ data, setKey }) => {
  console.log(data)
  return (
    <div>
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
              <Footer item={item} setKey={setKey}/>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Jobs
