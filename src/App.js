import { Box, useBreakpointValue } from "@chakra-ui/react";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer1';
import Navbar from './Components/Navbar';
// import { useEffect, useState } from "react";

function App() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   // Wait for 2 seconds and then set isLoading to false
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);
  // }, []);

  return (
    <>
      <Box maxW="100vw" margin="auto">
        <Navbar/>
        <Box maxWidth={isSmallScreen? "90vw" : "80vw"} margin="auto">
           
            {/* <Center height={"100vh"} flex justifyContent="center" alignItems={"center"}> */}
              {/* <Spinner thickness='7px'
                    speed='0.65s'
                    emptyColor='gray.200'
                     color='purple.700'
                     size='xl'/> */}
              <Home />
              <About />
              <Skills />
              <Projects />
              <Github />
               <Contact /> 
            {/* </Center> */}
          
       </Box>
       </Box>
       <Footer/>
    </>
  )
          }


export default App;