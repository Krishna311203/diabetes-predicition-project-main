import { useState , useEffect } from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Preloader from './Preloader/Preloader'
function App() {

  const [loader , setLoader] = useState(true)

   useEffect(() => {
     setInterval(() => {
      setLoader(false)
     }, 1500);
     
   }, [])
   
  return (
    <>
      {
        loader ? (<Preloader></Preloader>) : 
        (<div>
         <Navbar></Navbar>
          <Form></Form> 
        </div>)
      } 
    </>
  )
}

export default App