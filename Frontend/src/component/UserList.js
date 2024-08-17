import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WebService from "../Service/WebService";
import WebAPI from "../Service/WebAPI";

function UserList()
{
    const data = useSelector(state=>state.userData.value);
    const [userData,setUserData] = useState([]);
    useEffect(()=>{
        loadUserList()
    })

    var loadUserList = async ()=>{
     // console.log("User List : "+data.token)
      var response = await WebService.getAPIUsingToken(WebAPI.viewAllUserList,data.token);
     // console.log("List Response is: "+response)
     // console.log("List Response is: "+JSON.stringify(response))
      if(response.data.status)
      {
        setUserData(response.data.data)
      }
    }

   return<div className="container">
    <div className="row">
    {userData.map((data)=>{
         return<div>
             <div className="row well container my-2  py-2 border border-2">
              <div class="col-md-3">
                <img src={data.image} alt="Image Not Found" className="img-rounded rounded-circle " 
                height={90} width={90}/>
              </div>  
              <div class="col-md-3">
                <b>{data.name}</b>
              </div>
              <div class="col-md-3">
                <button className="btn btn-success">Send Request</button>
              </div>
              <div class="col-md-3">
                <button className="btn btn-danger">Send Message</button>
              </div>
             </div> 
         </div> 
    })}

    </div>
     
  </div>
}
export default UserList