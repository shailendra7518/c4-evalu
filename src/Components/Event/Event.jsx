// This is an event details page which has its own route

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Event = () => {
  const {id}=useParams()
const [el,setel]=useState({})
  console.log(id)
useEffect(()=>{
  axios.get(`http://localhost:8080/meetups/${id}`)
  .then(function (response) {
    // handle success
    
    let data=response.data
    console.log(data)
    setel(data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
},[])
 

  return (
    <div className="eventContainer">

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

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => { }}>Subscribe</button>
    </div>
  );
};
