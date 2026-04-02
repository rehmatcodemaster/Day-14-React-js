import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const BtnClicked = () => {
    console.log("Button is Clicked");
     navigate('/');
  }
  return (
    <div>
      <button 
      onClick={()=>{
        navigate('/')
      }}
      className='bg-red-500 rounded-3xl cursor-pointer  ' >
        Return to home
      </button>
       <button 
      onClick={()=>{
        navigate(-1)
      }}
      className='bg-red-500 rounded-3xl cursor-pointer  ' >
        Return to home
      </button>
      <h1>About Us</h1>
      <p>This is the About page.</p>
    </div>
  )
}
export default About
