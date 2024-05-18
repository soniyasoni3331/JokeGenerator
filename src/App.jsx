import Joke from "./Joke"


function App() {

  return (
    <div className="">
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-[#FFFAE5] text-[#37818A]">
        <h1 className="text-4xl font-bold m-10">Joke Generator Using React</h1>
        <Joke/>
      </div>
    </div>
  )
}

export default App
