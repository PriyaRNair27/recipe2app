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


    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table ">
  <thead className="table table-info">
    <tr>
      <th scope="col">Recipe title</th>
      <th scope="col"> Category</th>
      <th scope="col">Description</th> 
      <th scope="col">Prepared by</th>
     
     
    </tr>
  </thead>
  <tbody>
  {viewlist.map((value,key)=>{
           return <tr>
               <td>{value.recipetitle}</td>
                <td>{value.category}</td>
                <td>{value.decription}</td>
                <td>{value.preparedby}</td>
     
    <td ><button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button></td>
      </tr>
        })}
     
    
  </tbody>
</table>
        </div>
        </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Recipeview