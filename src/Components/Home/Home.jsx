import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
export const Home = () => {

  const [meetups,setmeetups]=useState([])
  let usercheck=JSON.parse(localStorage.getItem("userLoginDetails"))
 

useEffect(()=>{
Getmeetup()
},[])

const Getmeetup=()=>{
  axios.get('http://localhost:8080/meetups')
  .then(function (response) {
    // handle success
    
    let data=response.data
   setmeetups(data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}





const navigator=useNavigate()
console.log(meetups)
if(!usercheck){
 navigator("/LoginSignUp")
 
}

  return (
    <div className="homeContainer">
      <h1>meetups</h1>
      {meetups
        
        .map((el) => {
          return (
            <Link key={el.id} to={`/event/${el.id}`} className="events">
             Title :- <th className="title"> {el.title}</th>
             <br />
             Theme:- <th className="theme">{el.theme}</th>
             <br />
             description:- <th className="description">{el.description}</th>
             <br />
             date :- <th className="date">{el.date}</th>
             <br />
             time:- <th className="time">{el.time}</th>
             <br />

             Location :- <th className="location">{el.date}</th>
             <br />
             <img className="image" src={el.image} alt="event" height={"200px"} />

              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
           // add value here
            
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
