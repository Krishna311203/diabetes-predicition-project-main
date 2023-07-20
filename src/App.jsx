import { useState , useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './footer'
import Profile from './Profile-form'
import Form from './Form'
import Preloader from './Preloader/Preloader'
function App() {

  // const [loader , setLoader] = useState(true)

  //  useEffect(() => {
  //    setInterval(() => {
  //     setLoader(false)
  //    }, 2500);
     
  //  }, []) #3F2305 dark brwon for navbar F5F5F5 F2EAD3 
   
  return (
    <>
      {
        // loader ? (<Preloader></Preloader>) : 
        (<div>
         <Navbar></Navbar>
          <Hero></Hero>
          <Profile></Profile>
          <Footer></Footer>
          {/* <section className='w-[100vw] h-[100vh] ' ></section> */}

        
        </div>)
      } 
    </>
  )
}

export default App
