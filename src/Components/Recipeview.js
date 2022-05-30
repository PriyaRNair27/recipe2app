import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Recipeview = () => {
    var [viewlist,setviewlist]=useState([])
    axios.get("http://localhost:4000/api/recview").then(
      (Response)=>{
        console.log(Response.data)
        setviewlist(Response.data.data)
      }
    )
    const deleteApiCall=(id)=>{
        const data={"_id":id}
       console.log(data)
       axios.post("http://localhost:4000/api/recipdelete",data).then((response)=>
       {
           if(response.data.status=="success")
           {
               alert("success")
           }
           else
           {
               alert("error")
           }
       })
      
    }
  return (
    <div>
        <Header/>
        <div className="container">
          <div className="row">

<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <div className="row ">

    {viewlist.map((value,key)=>
        {
            return <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                <div class="card" >
 <center> <img style={{width:250,height:250}} src={value.image} class="card-img-top" alt="..."/></center>
  <div class="card-body">
    <p class="card-title"><b>recipe title: </b>{value.recipetitle}</p>
    <p class="card-text"><b>category: </b>{value.category}</p>
    <p class="card-text"><b>description: </b>{value.description}</p>
    <p class="card-text"><b>preparedby: </b>{value.preparedby}</p>
    <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>
  </div>
</div>
</div>
        })}
        </div>
        </div>
        </div>
    </div>
        </div>
    
  )
}

export default Recipeview