import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import WebService from "../Service/WebService";
import WebAPI from "../Service/WebAPI";

function ViewPost()
{
  const data = useSelector(state=>state.userData.value);
 
  const [ViewPost,setViewPost] = useState({});
  useEffect(()=>{
   loadOurPostsList();
  },[])
  
  var loadOurPostsList =async ()=>{
   var response= await WebService.getAPIUsingToken(WebAPI.viewLoginUserPost,data.token);
   console.log("My Post List 1 : "+response);
   console.log("My Post List 2 : "+JSON.stringify(response));
   
   if(response.data.status)
   {
    setViewPost(response .data);
   }
  }
  return<div className="container text-center mt-5 text-danger">
    <h1> Post`s</h1>
    <div className="row">
      <div className="col-md-6">{ViewPost.postfile}</div>
      <div className="col-md-6">{ViewPost.message} <br/>{ViewPost.postdate}</div>
    </div>
  </div>
}
export default ViewPost;
