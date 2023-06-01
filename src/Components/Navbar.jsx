import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import Sidebar from "./Sidebar";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
// import Shahid_Raza_Resume from "../assets/Shahid-Raza-Resume.pdf";
import Sidebar from "./Sidebar";
import "./Navbar.scss";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");

  return (
    <>
      <div>
        <Helmet>
          <title>{`Shahid Raza | ${title}`}</title>
        </Helmet>
      </div>
      <Box
        id="nav-menu"
        pos={{ base: "sticky", md: "sticky", sm: "fixed" }}
        zIndex="7"
        textTransform={"capitalize"}
        top="0"
        left="0"
        right="0"
        background={colorMode === "light" ? "#b0bec5" : "black"}
      >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >
          <Box height="3.5rem" marginLeft={{ base: "2px", lg: "2rem" }}>
            <Link href="#">
              <Image
                src={
                  colorMode === "dark"
                    ? "https://static.vecteezy.com/system/resources/thumbnails/012/793/822/small/sr-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg"
                    : "https://static.vecteezy.com/system/resources/thumbnails/012/793/822/small/sr-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg"
                }
                height={"3.5rem"}
                borderRadius={"1.3rem"}
              />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"50%"}
            justify="space-around"
            align={"center"}
            marginRight="2rem"
          >
            <Link
              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
            >
              home
            </Link>
            <Link
              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
            >
              contact
            </Link>
            <Button
              _hover={{ bg: "#0d0443" }}
              border={"1px solid white"}
              // backgroundColor={"black"}
              width="max-content"
              // color={"white"}
              style={{ backgroundColor: "black", color: "white" }}
              sx={{
                ":hover": {
                  boxShadow: "0 0 9px #7500fa",
                  color: "white",
                },
              }}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/11wnjvDKD9S9F9VEUBTK1eaFchXc-X1ti/view?usp=share_link",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                // href={Shahid_Raza_Resume}
                target="_blank"
                download="Shahid_Raza_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
        <div>
          <div className="navanimate"></div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
