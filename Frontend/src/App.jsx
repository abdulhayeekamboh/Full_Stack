import React, { useEffect, useState } from 'react'
import axios from 'axios';


const App = () => {

  const [datab, setdatab] = useState([])

  useEffect(()=>{
    const fetchdata = async ()=>{
      const response = await axios.get('http://localhost:3400/api')
      // .then((response)=>{
        setdatab(response.data);
      // })
    }
    fetchdata();
  })

  return (
    <>
    {
      datab.map((data,index)=>(
        <div key={index}>
          <div className="page">
            <div className="container">
              <img src={data.image} alt="" />
            </div>
            <h1>{data.name}</h1>
            <br />
            <h3>{data.titile}</h3>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default App