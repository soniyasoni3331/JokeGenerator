import React, {useState } from 'react'

const URL= "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

function Joke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const jokeGenerator = async ()=>{
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(URL);
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      const data = await response.json()
      setJoke(data.joke);
    } catch (error) {
      setError("Failed to fetch the Joke!");
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
        <button className="bg-[#37818A] p-4 text-[#FFFAE5] font-bold rounded-lg text-2xl shadow-2xl hover:bg-[#2b6f78]"
        onClick={()=> jokeGenerator()}>
          { loading ? "Loading..." : "Click to generate a joke" }
        </button>
        <div className="w-auto h-auto sm:w-1/3 sm:h-[200px] border m-10 rounded-md shadow-lg flex justify-center items-center">
        {
          error ? (<p className="text-center p-5 font-bold">{error}</p>):
          (<p className="text-center p-5 font-bold">{joke}</p>)
        }
        </div>
    </>
    
  )
}

export default Joke