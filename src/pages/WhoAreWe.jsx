import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import TextContentMiddle from "../components/TextContentMiddle";

import parse from "html-react-parser";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselBox from "../components/WhoAreWe/CarouselBox";
import CarouselBoxImage from "../components/WhoAreWe/CarouselBoxImage";
import CarouselContent from "../components/WhoAreWe/CarouselContent";
import CarouselContentImage from "../components/WhoAreWe/CarouselContentImage";

import BlocContent from "../components/BlocContent";

import img from "../assets/404.png";
import whiteSquare from "../assets/whiteSquare.png";

class WhoAreWe extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                What about us ?
              </Box>
              <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
                <Box>+ Our history</Box>
                <Box>+ Our team and scientific consortium</Box>
                <Box>+ Value and spirit</Box>
                <Box>+ Investors and board</Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold3="bold"
          textDeco3="underline"
        />

        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFF"
              fillOpacity="1"
              d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Box>

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw 10vh 10vw">
            <TextContentMiddle
              title="Our history"
              text={parse(`
                Wired Beauty as of today is a saas based start-up co-founded by Stanislas and Sophie, two beauty experts who become friends while working toghether at l’Oréal.  
                <br>
                <br>
                Stanislas initiated the scientific research on electrochemistry and antiox measurement to develop a skincare prescription tool, and launched a first B2C sun prevention tool (mapo solar). 
                <br>
                <br>                                
                In 2021,R considering the blue ocean of cosmetic market research and the latest demands of consumer on efficiency proofs especially in Asia, the two of them decided to pivot to a 100% B2B Saas company, convinced by the potential of this technology. 
                <br>
                <br>                                
                As of today, Wired Beauty Technologies has invested 1.3M€ in research on their exclusive IOT, mobile app, algorithand scientific exposome and suncare knowledge partnering with a top-notch consortium ( APHP et Qima lien a créer vers page scientific)
                `)}
            />
          </Box>
        </Box>

        <CarouselContent />

        <Box>
          <Box
            textAlign="center"
            color="#fff"
            fontWeight="bold"
            fontFamily="Poppins"
            fontSize="3xl"
            padding="2rem 0 0 0"
          >
            Wired Beauty is ...
          </Box>
          <Box display="flex" justifyContent="space-around" margin="0 15rem">
            <BlocContent
              title={
                <>
                  <Image
                    src={img} //a changer avec l'illustration
                    alt="personImage"
                    width="80px"
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
                    src={img} //a changer avec l'illustration
                    alt="personImage"
                    width="80px"
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
                    src={img} //a changer avec l'illustration
                    alt="personImage"
                    width="80px"
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
          <Box width="100vw" padding="0 10vw 10vh 10vw">
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
            />

            <Box>
              <Box
                color="lightblue"
                fontFamily="Poppins"
                fontWeight="bold"
                fontSize="3xl"
                textAlign="center"
                marginBottom="1rem"
              >
                Corporate responsability
              </Box>
              <Box display="flex">
                <TextContentMiddle
                  text={parse(`
                    We respect the data regulations issued by the European Union and even top their tight regulations about consent or right to be forgotten. 
                    <br>
                    <br>
                    Our data is anonymized locally and analyzed and stored in our data centers in Europe.
                    <br>
                    <br>
                    We believe in people development and encourage diversity of opinions.
                `)}
                  moreContent={
                    <TextContentMiddle
                      title="Investors and boards"
                      text={parse(`
                    Wired beauty is privately held and backed by a college of 14 business angels. Stanislas, as the founder and President, still own 69,47% of the equity. 
                    <br>Sophie, as co-founder and CEO owns 18%. 
                `)}
                    />
                  }
                />

                <TextContentMiddle
                  text={parse(`
                    We produce our devices from recycled materials and since the developement have reduced the size of our IOT devive by 40% , thus impacting transport and packaging costs.
                    <br>
                    <br>
                    We believe and are committed for climate change and compensate our carbon emission sustaining our friensd Matthiew in his venture for a regenerative and low carbon  agriculture in France. Learn more about Terra Terra.  ➢ donate too
                `)}
                  moreContent={
                    <TextContentMiddle
                      title="Advisory board"
                      text={parse(`
                    Pierre François LE LOUËT (NellyRodi President – Trends research)<br>
                    Gilles GENAIN (former head of L’Oréal Product Development)
                `)}
                      moreContent={<Box>test</Box>}
                    />
                  }
                />
              </Box>
            </Box>

          </Box>
        </Box>

        <Footer />
      </>
    );
  }
}

export default WhoAreWe;
