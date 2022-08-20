import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Home.css'
import './Nav.css'

function Home() {

  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);


  const GetData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const JsonData = await response.json();
    const ArrayData = JsonData.data;
    console.log(ArrayData);
    setData(ArrayData);
  }


  useEffect(() => {
    GetData();
  }, []);


  const display = () => {
    // console.log(data)
    setIsShown(true);
  }



  return (
    <div>

      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light c" style={{ paddingRight: "1%", paddingLeft: "2%" }}>
          <a class="navbar-brand" style={{fontSize:"40px"}}><b>LetsGrowMore</b></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" style={{marginLeft:"350%",fontSize:"30px"}}><b>USERS</b></a>
              </li>
            </ul>
            <button type="button" class="btn btn-dark show c" onClick={display}>Show User Data</button>
          </div>
        </nav>
      </div>

      <div className="h">
        <div class="container">
          {/* <div class="row"> */}
            {isShown && (
              <div className='row'>
                {
                  data.map((item) =>
                  (
                    <div className="col-4 h-col">
                      <div class="card c">
                        <img class="card-img-top" src={item.avatar} alt="Card image cap" />
                        <div class="card-body">
                          <h4 class="card-title">{item.first_name} {item.last_name}</h4>
                          <h6 class="card-text"><b>ID : </b>{item.id}</h6>
                          <p class="card-text"><b>Email : </b>{item.email}</p>
                        </div>
                      </div>
                     </div>
                  ))
                }
              </div>
            )}
          </div>
        </div>
       </div>
  //  </div>

  )
}

export default Home