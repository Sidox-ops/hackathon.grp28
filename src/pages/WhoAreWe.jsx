import React from "react";
import { Box, Image } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TextContentMiddle from "../components/TextContentMiddle";
import BlocPersona from "../components/WhoAreWe/BlocPersona";
import BlocTextDouble from "../components/WhoAreWe/BlocTextDouble";

import parse from "html-react-parser";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselContent from "../components/WhoAreWe/CarouselContent";
import CarouselContentImage from "../components/WhoAreWe/CarouselContentImage";

import BlocContent from "../components/BlocContent";

import img from "../assets/images/404.png";
import person1 from "../assets/images/personne1.png";
import person2 from "../assets/images/personne2.png";

import { HashLink as Linked } from "react-router-hash-link";

import roundPhoto1 from "../assets/images/roundPhoto1.png";
import roundPhoto2 from "../assets/images/roundPhoto2.png";
import roundPhoto3 from "../assets/images/roundPhoto3.png";

import roundedPhoto1 from "../assets/images/roundedPhoto1.png";
import roundedPhoto2 from "../assets/images/roundedPhoto2.png";
import roundedPhoto3 from "../assets/images/roundedPhoto3.png";
import roundedPhoto4 from "../assets/images/roundedPhoto4.png";

class WhoAreWe extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <>
              <Box
                as="h1"
                fontSize={["1rem", "2rem", "3rem"]}
                margin="0 0 1em 0"
              >
                What about us ?
              </Box>
              <Box fontSize={["1rem", "1.5rem", "2rem"]} fontWeight="light">
                <Box as="h2">
                  <Linked smooth to="#history">
                    + Our history
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#carousel1">
                    + Our team and scientific consortium
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#ourValues">
                    + Value and spirit
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#investor">
                    + Investors and board
                  </Linked>
                </Box>
              </Box>
            </>
          }
          bold3="bold"
          textDeco3="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw 10vh 10vw" margin="-7rem 0 0 0">
            <TextContentMiddle
              title="Our history"
              text={parse(`
                Wired Beauty as of today is a saas based start-up co-founded by Stanislas and Sophie, two beauty experts who become friends while working toghether at l???Or??al.  
                <br>
                <br>
                Stanislas initiated the scientific research on electrochemistry and antiox measurement to develop a skincare prescription tool, and launched a first B2C sun prevention tool (mapo solar). 
                <br>
                <br>                                
                In 2021,R considering the blue ocean of cosmetic market research and the latest demands of consumer on efficiency proofs especially in Asia, the two of them decided to pivot to a 100% B2B Saas company, convinced by the potential of this technology. 
                <br>
                <br>                                
                As of today, Wired Beauty Technologies has invested 1.3M??? in research on their exclusive IOT, mobile app, algorithand scientific exposome and suncare knowledge partnering with a top-notch consortium ( APHP et Qima lien a cr??er vers page scientific)
                `)}
              textAlign="center"
              id="history"
            />
          </Box>
        </Box>

        <CarouselContent id="carousel1" />

        <Box margin="2rem 2rem 5rem 2rem">
          <Box
            textAlign="center"
            color="lightblue"
            fontWeight="bold"
            fontSize={["2rem", "2rem", "2.5rem"]}
            padding="2rem 0 0 0"
          >
            Wired Beauty is ...
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            margin={["2rem 0", "2rem 5rem"]}
            flexWrap="wrap"
          >
            <BlocContent
              title={
                <>
                  <Image
                    src={roundPhoto1} //a changer avec l'illustration
                    alt="personImage"
                    // width={["80vw", "50vw", "600px"]}
                    height="80px"
                    margin="auto"
                  />
                </>
              }
              text="IOT can save R&D money and speed-up product launch tempo"
            />
            <BlocContent
              title={
                <>
                  <Image
                    src={roundPhoto2} //a changer avec l'illustration
                    alt="personImage"
                    // width={["80vw", "50vw", "600px"]}
                    height="80px"
                    margin="auto"
                  />
                </>
              }
              text="Repeatability of protocols increases reliability of results "
            />
            <BlocContent
              title={
                <>
                  <Image
                    src={roundPhoto3} //a changer avec l'illustration
                    alt="personImage"
                    // width={["80vw", "50vw", "600px"]}
                    height="80px"
                    margin="auto"
                  />
                </>
              }
              text="Data Science can help cosmetic scientists"
            />
          </Box>
        </Box>

        <CarouselContentImage />

        <Box backgroundColor="#fff" color="white" padding="3rem 0 0 0">
          <Box width="100vw" padding="0 10vw 10vh 10vw" id="OurValues">
            <TextContentMiddle
              title="Our values"
              text={parse(`
                <ul>
                    <li>Since the beginning, Wired Beauty has had 1 mission : bring evidence-based results to their clients rather than administer classical surveys. </li>
                    <li>Hence the digitally enabled solutions. </li>
                    <li>We have  a strong entrepreneurial culture and constantly innovate to find new claims , data, new proofs and reduce the R&D cost and tempo. </li>
                    <li>We aim to have a real impact on how consumers see brand performance. </li>
                    <li>To help our clients, we establish new norms of excellence in cosmetic research</li>
                </ul>
              `)}
              textAlign="center"
              id="ourValues"
            />

            <Box
              display="flex"
              justifyContent="space-around"
              // minW="500px"
              flexWrap="wrap"
              margin="0 0 5rem 0"
            >
              <BlocPersona
                title="Client passion"
                txt={parse(`
                We focus on results with professionalism and constantly respect ethical codes.<br>
                We listen, we deliver. <br>
                We help our clients succeed.
              `)}
                img={roundedPhoto1}
              />
              <BlocPersona
                title="Integrity and openess"
                txt={parse(`
                We say things as they are and research new frontiers open-mindedly.
              `)}
                img={roundedPhoto2}
              />
              <BlocPersona
                title="Tech and consumer"
                txt={parse(`
                We use technology to better understand consumer needs and life style as well as skin reactions.<br>
                We taylor our research to client objectives. <br>
                In tubo, in vitro, in vivo. <br>
                We make it simple and save people time.
              `)}
                img={roundedPhoto3}
              />
              <BlocPersona
                title="One Team"
                txt={parse(`
                We team up with labs, and their CROs all over the worlds from the concept development or for improved formulae.<br>
                It feels different to work with us because our people are unlike any other. <br>
                We bring new perspectives: mutual trust and speed.
              `)}
                img={roundedPhoto4}
              />
            </Box>

            {/*  */}
              <Box
                color="lightblue"
                fontWeight="bold"
                fontSize={["2rem", "2rem", "2.5rem"]}
                textAlign="center"
                marginBottom="1rem"
              >
                Corporate responsability
              </Box>

            <BlocTextDouble
              text1={`
              We respect the data regulations issued by the European Union and even top their tight regulations about consent or right to be forgotten.<br> 
              <br>
              Our data is anonymized locally and analyzed and stored in our data centers in Europe.<br>
              <br>
              We believe in people development and encourage diversity of opinions.
              `}
              text2={`
                We produce our devices from recycled materials and since the developement have reduced the size of our IOT devive by 40% , thus impacting transport and packaging costs.
                <br>
                <br>
                We believe and are committed for climate change and compensate our carbon emission sustaining our friensd Matthiew in his venture for a regenerative and low carbon  agriculture in France. Learn more about Terra Terra.  ??? donate too
              `}
              textAlign1="center"
              textAlign2="center"
            />

            <BlocTextDouble
              title1="Investors and boards"
              text1={`
              Wired beauty is privately held and backed by a college of 14 business angels. Stanislas, as the founder and President, still own 69,47% of the equity.<br>
              Sophie, as co-founder and CEO owns 18%. 
              `}
              textAlign1="center"
              title2="Advisory board"
              text2={`
                Pierre Fran??ois LE LOU??T (NellyRodi President ??? Trends research)<br>
                Gilles GENAIN (former head of L???Or??al Product Development)
              `}
              textAlign2="center"
              id="investor"
              moreText2={
                <Box
                  display="flex"
                  padding="2rem 0 0 0"
                  justifyContent="space-between"
                >
                  <Image
                    width="45%"
                    height="auto"
                    src={person1}
                    alt="Image of a person"
                  />
                  <Image
                    width="45%"
                    height="auto"
                    src={person2}
                    alt="Image of a person"
                  />
                </Box>
              }
            />
          </Box>
        </Box>
        <Footer />
      </>
    );
  }
}

export default WhoAreWe;
