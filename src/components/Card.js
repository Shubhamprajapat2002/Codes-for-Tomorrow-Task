import React, { useState, useEffect } from "react";

const Card = () => {

    const [data, setData] = useState([])

    const getData = () => {
      fetch(' https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(myjson => {
          // console.log(data)
          setData(myjson)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])

    
  return (
   
    <div className='flex' >
        {
          data.map((val) => {
            return (
              <div className="my-3 A">
                <div className="card flex-item" style={{ width: "18rem" }}>
                  <span style={{ width: "10%", marginLeft: "90 %", cursor: 'pointer' }} className="badge rounded-pill bg-danger"> X </span>
                  <div className="card-body">
                    <h5 className="card-title">{val.title}  </h5>
                    <p className="card-text">{val.body}</p>
                    <p>{new Date().toLocaleString() + ""}</p>
                  </div>
                  <img src='https://picsum.photos/200' alt="..." />
                </div>
              </div>
            )
          })
        }
      </div>

  )
}

export default Card