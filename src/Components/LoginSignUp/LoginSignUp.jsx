import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/Login/action";
import { store } from "../../Redux/store";

export const LoginSignUp = () => {

const userdata=useSelector((store)=>{
  return store.User.user
})

console.log("user",userdata)


  const dispatch=useDispatch()
const [user,setuser]=useState({
  name:"",
  password:"",
  location:"",
  interests:[],
  image:"",
  subscribed:[]

})

  const handlechang=(e)=>{
    const {type,className,value}=e.target
    console.log([className])
    if([type]=="checkbox" ){
      setuser({...user,["interests"]:[className]})
    }else{
      setuser({...user,[className]:value})
    }
   
  }

const handlesubmit=(e)=>{
  e.preventDefault();

  axios.post('http://localhost:8080/users',user)
  .then(function (response) {
   
  }).then(()=>{
    Getuser()
  })
  .catch(function (error) {
    console.log(error);
  });
}
useEffect(()=>{
Getuser()
},[])

const Getuser=()=>{
  axios.get('http://localhost:8080/users')
  .then(function (response) {
    // handle success
    
    let data=response.data
    dispatch(userLogin(data))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

const [loginuser,setloginuser]=useState({
  name:"",
  password:"",
 

})
const loginchange=(e)=>{
const {className,value}=e.target
   setloginuser({...loginuser,[className]:value})
}
const handlelogin=(e)=>{
  e.preventDefault()
  
  
  for(let i=0;i<userdata.length;i++){
    let {name,password}=userdata[i]
    if(name==loginuser.name && password==loginuser.password){
     localStorage.setItem("userLoginDetails",JSON.stringify(userdata[i]))
    }
  }
}



  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handlesubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
        
          type="text"
          className="name"
          onChange={handlechang}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handlechang}
          required
        />
        <br />
        <select value={""} className="location" onChange={handlechang}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={handlechang}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={handlechang} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={handlechang} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={handlechang} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={handlechang} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={handlechang} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={handlechang}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={handlelogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={loginchange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={loginchange}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
