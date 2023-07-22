import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./footer";
import Med from "./medinfo";
import Profile from "./Profile-form";
import Form from "./Form";
import Preloader from "./Preloader/Preloader";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  // const [loader , setLoader] = useState(true)

  //  useEffect(() => {
  //    setInterval(() => {
  //     setLoader(false)
  //    }, 2500);

  //  }, []) #3F2305 dark brwon for navbar F5F5F5 F2EAD3

  return (
    <>
      {/* // loader ? (<Preloader></Preloader>) : */}
      {
        <Router>
          <div>
            <Navbar></Navbar>

            <Routes>
              <Route path="/med" element={<Med />} />
              <Route
                path="/"
                element={
                  <div>
                    <Hero></Hero>
                    <Profile />
                  </div>
                }
              />
            </Routes>

            <Footer></Footer>
            {/* <section className='w-[100vw] h-[100vh] ' ></section> */}
          </div>
        </Router>
      }
    </>
  );
}

export default App;
