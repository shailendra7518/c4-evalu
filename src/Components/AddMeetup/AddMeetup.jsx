import axios from "axios";
import { useEffect, useState } from "react";

// User should be able to add/create new meetups 

export const AddMeetup = () => {

  const [meetup,setmeetup]=useState({
    title:"",
    date:"",
    location:"",
    time:"",
    theme:"",
    description:"",
    image:"https://images.unsplash.com/photo"
  })
  
    const handlechang=(e)=>{
      const {className,value}=e.target
      
     
        setmeetup({...meetup,[className]:value})
      
     
    }
  
  const handlesubmit=(e)=>{
    e.preventDefault();
  
    axios.post('http://localhost:8080/meetups',meetup)
    .then(function (response) {
     console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

console.log(meetup)


  return (
    <div className="addMeetupContainer">
      <form onSubmit={handlesubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={handlechang} required />
        <label>Location</label>
        <select value={""} className="location" onChange={handlechang}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={handlechang}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={handlechang}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={""} className="theme" onChange={handlechang}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={handlechang}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={handlechang}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
