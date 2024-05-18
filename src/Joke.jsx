import React, {useEffect, useState } from 'react'

function Joke() {
        const [joke, setJoke] = useState("");
      useEffect(()=>{
        const fetchAPI = async () =>{
          const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
             const data = await response.json();
             const returned = fetchAPI();
             returned.then(mydata=>mydata.joke)
                     .catch(error=>console.log(error))
     }
    
      },[]);
  

  return (
    <>
        <button className="bg-[#37818A] p-4 text-[#FFFAE5] font-bold rounded-lg text-2xl shadow-2xl"
        onClick={()=>returned}>
        Click to generate a joke</button>
        <div className="w-1/3 h-32 border m-10  rounded-md shadow-lg flex justify-center items-center">
        <p className="text-center p-5 font-bold">{joke}</p>
        </div>
    </>
    
  )
}

export default Joke