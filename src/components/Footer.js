// import { Switch, Route } from 'react-router-dom'
// import data from '../data.json'
// import header from '../images/bg-header-mobile.svg'
// import { useContext, useState, useEffect } from 'react'
// import { JobContext } from '../contexts/JobContext'
// const App = () => {
//   const { key, setKey } = useContext(JobContext)
//   const [array, setArray] = useState([])
//   const [newrole, setNewrole] = useState([])
//   const [newlevel, setNewlevel] = useState([])
//   const [newlanguage, setNewlanguage] = useState([])
//   const [newtool, setNewtool] = useState([])

//   const AddArray = [...newrole, ...newlevel, ...newlanguage, ...newtool]

//   // This function below removes duplicate elements from the array
//   const uniqueAddArray = AddArray.filter((item, index) => {
//     return AddArray.indexOf(item) === index
//   })

//   // This function is to delete items from the array
//   const deleteItem = (item) => {
//     if (newrole.includes(item)) {
//       setNewrole(newrole.filter((el) => el !== item))
//     } else if (newlevel.includes(item)) {
//       setNewlevel(newlevel.filter((el) => el !== item))
//     } else if (newlanguage.includes(item)) {
//       setNewlanguage(newlanguage.filter((el) => el !== item))
//     } else {
//       setNewtool(newtool.filter((el) => el !== item))
//     }
//   }
//   const clearItem = () => {
//     setNewrole([])
//     setNewlevel([])
//     setNewlanguage([])
//     setNewtool([])
//   }
//   console.log(data)
//   console.log(uniqueAddArray)

//   return (
//     <div className='App'>
//       <header className='border border-danger'>
//         <img src={header} alt='' />
//       </header>
//       {/* <div>{key ? <Jobs data={data} setKey={setKey}/> : <Searchedjob />}</div> */}
//       <div>
//         {key ? (
//           <section className='border border-dark p-4'>
//             {data.map((item, key) => {
//               return (
//                 <div key={key} className='border border-danger mt-5'>
//                   <img src={item.logo} alt='logo' />
//                   <p>{item.company}</p>
//                   <p>{item.new === true && <p>new!</p>}</p>
//                   <p>{item.featured === true && <p>featured!</p>}</p>
//                   <p>{item.position}</p>
//                   <p>{item.postedAt}</p>
//                   <p>{item.contract}</p>
//                   <p>{item.location}</p>
//                   <hr />
//                   <div>
//                     <p
//                       onClick={() => (
//                         setKey(false), setNewrole([...newrole, item.role])
//                       )}
//                     >
//                       {item.role}
//                     </p>
//                     <p
//                       onClick={() => (
//                         setKey(false), setNewlevel([...newlevel, item.level])
//                       )}
//                     >
//                       {item.level}
//                     </p>
//                     <div>
//                       {item.languages.map((item, key) => {
//                         return (
//                           <div key={key}>
//                             <p
//                               onClick={() => (
//                                 setKey(false),
//                                 setNewlanguage([...newlanguage, item])
//                               )}
//                             >
//                               {item}
//                             </p>
//                           </div>
//                         )
//                       })}
//                     </div>
//                     <div>
//                       {item.tools.map((item, key) => {
//                         return (
//                           <div key={key}>
//                             <p
//                               onClick={() => (
//                                 setKey(false), setNewtool([...newtool, item])
//                               )}
//                             >
//                               {item}
//                             </p>
//                           </div>
//                         )
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </section>
//         ) : (
//           <div>
//             <header>
//               {uniqueAddArray.map((item, key) => {
//                 return (
//                   <div key={key}>
//                     <p>{item}</p>
//                     <p onClick={() => deleteItem(item)}>close</p>
//                   </div>
//                 )
//               })}
//               <a href='http://localhost:3000' onClick={clearItem}>
//                 clear
//               </a>
//               {/* <p onClick={clearItem}>clear</p> */}
//             </header>
//             <section>
//               {data
//                 .filter((item) => {
//                   if (uniqueAddArray.includes(item.role)) {
//                     return item
//                   }
//                 })
//                 .map((item, key) => {
//                   return (
//                     <div key={key} className='border border-danger mt-5'>
//                       <img src={item.logo} alt='logo' />
//                       <p>{item.company}</p>
//                       <p>{item.new === true && <p>new!</p>}</p>
//                       <p>{item.featured === true && <p>featured!</p>}</p>
//                       <p>{item.position}</p>
//                       <p>{item.postedAt}</p>
//                       <p>{item.contract}</p>
//                       <p>{item.location}</p>
//                       <hr />
//                       <div>
//                         <p
//                           onClick={() => (
//                             setKey(false), setNewrole([...newrole, item.role])
//                           )}
//                         >
//                           {item.role}
//                         </p>
//                         <p
//                           onClick={() => (
//                             setKey(false),
//                             setNewlevel([...newlevel, item.level])
//                           )}
//                         >
//                           {item.level}
//                         </p>
//                         <div>
//                           {item.languages.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewlanguage([...newlanguage, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                         <div>
//                           {item.tools.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewtool([...newtool, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//             </section>
//             <section>
//               {data
//                 .filter((item) => {
//                   if (uniqueAddArray.includes(item.level)) {
//                     return item
//                   }
//                 })
//                 .map((item, key) => {
//                   return (
//                     <div key={key} className='border border-danger mt-5'>
//                       <img src={item.logo} alt='logo' />
//                       <p>{item.company}</p>
//                       <p>{item.new === true && <p>new!</p>}</p>
//                       <p>{item.featured === true && <p>featured!</p>}</p>
//                       <p>{item.position}</p>
//                       <p>{item.postedAt}</p>
//                       <p>{item.contract}</p>
//                       <p>{item.location}</p>
//                       <hr />
//                       <div>
//                         <p
//                           onClick={() => (
//                             setKey(false), setNewrole([...newrole, item.role])
//                           )}
//                         >
//                           {item.role}
//                         </p>
//                         <p
//                           onClick={() => (
//                             setKey(false),
//                             setNewlevel([...newlevel, item.level])
//                           )}
//                         >
//                           {item.level}
//                         </p>
//                         <div>
//                           {item.languages.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewlanguage([...newlanguage, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                         <div>
//                           {item.tools.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewtool([...newtool, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//             </section>
//             <section>
//               {data
//                 .filter((item) => {
//                   if (AddArray.includes(...item.languages)) {
//                     return item
//                   }
//                 })
//                 .map((item, key) => {
//                   return (
//                     <div key={key} className='border border-danger mt-5'>
//                       <img src={item.logo} alt='logo' />
//                       <p>{item.company}</p>
//                       <p>{item.new === true && <p>new!</p>}</p>
//                       <p>{item.featured === true && <p>featured!</p>}</p>
//                       <p>{item.position}</p>
//                       <p>{item.postedAt}</p>
//                       <p>{item.contract}</p>
//                       <p>{item.location}</p>
//                       <hr />
//                       <div>
//                         <p
//                           onClick={() => (
//                             setKey(false), setNewrole([...newrole, item.role])
//                           )}
//                         >
//                           {item.role}
//                         </p>
//                         <p
//                           onClick={() => (
//                             setKey(false),
//                             setNewlevel([...newlevel, item.level])
//                           )}
//                         >
//                           {item.level}
//                         </p>
//                         <div>
//                           {item.languages.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewlanguage([...newlanguage, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                         <div>
//                           {item.tools.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewtool([...newtool, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//             </section>
//             <section>
//               {data
//                 .filter((item) => {
//                   if (AddArray.includes(...item.tools)) {
//                     return item
//                   }
//                 })
//                 .map((item, key) => {
//                   return (
//                     <div key={key} className='border border-danger mt-5'>
//                       <img src={item.logo} alt='logo' />
//                       <p>{item.company}</p>
//                       <p>{item.new === true && <p>new!</p>}</p>
//                       <p>{item.featured === true && <p>featured!</p>}</p>
//                       <p>{item.position}</p>
//                       <p>{item.postedAt}</p>
//                       <p>{item.contract}</p>
//                       <p>{item.location}</p>
//                       <hr />
//                       <div>
//                         <p
//                           onClick={() => (
//                             setKey(false), setNewrole([...newrole, item.role])
//                           )}
//                         >
//                           {item.role}
//                         </p>
//                         <p
//                           onClick={() => (
//                             setKey(false),
//                             setNewlevel([...newlevel, item.level])
//                           )}
//                         >
//                           {item.level}
//                         </p>
//                         <div>
//                           {item.languages.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewlanguage([...newlanguage, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                         <div>
//                           {item.tools.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewtool([...newtool, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//             </section>
//             {/* <section>
//               {data.map((item, key) => {
//                 if (clearItem) {
//                   return (
//                     <div key={key} className='border border-danger mt-5'>
//                       <img src={item.logo} alt='logo' />
//                       <p>{item.company}</p>
//                       <p>{item.new === true && <p>new!</p>}</p>
//                       <p>{item.featured === true && <p>featured!</p>}</p>
//                       <p>{item.position}</p>
//                       <p>{item.postedAt}</p>
//                       <p>{item.contract}</p>
//                       <p>{item.location}</p>
//                       <hr />
//                       <div>
//                         <p
//                           onClick={() => (
//                             setKey(false), setNewrole([...newrole, item.role])
//                           )}
//                         >
//                           {item.role}
//                         </p>
//                         <p
//                           onClick={() => (
//                             setKey(false),
//                             setNewlevel([...newlevel, item.level])
//                           )}
//                         >
//                           {item.level}
//                         </p>
//                         <div>
//                           {item.languages.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewlanguage([...newlanguage, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                         <div>
//                           {item.tools.map((item, key) => {
//                             return (
//                               <div key={key}>
//                                 <p
//                                   onClick={() => (
//                                     setKey(false),
//                                     setNewtool([...newtool, item])
//                                   )}
//                                 >
//                                   {item}
//                                 </p>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 }
//               })}
//             </section> */}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default App
