import react from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav,Image } from 'react-bootstrap';
import { Form, Button } from "react-bootstrap";
import image from "./lens.webp";
import TP from "./TPdetector_logo.png"
import Navbar1 from "./Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// import Navbar from "react-bootstrap/Navbar";
const Home = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const bodyStyle = {
    backgroundColor: "#D9FDFF",
  };

  const navBarStyle = {
    background: "#D9FDFF",
    color: "#000000",
    padding: "10px",
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "light", 
    color: "black", 
    padding: "10px", 
  };

  return (
    <form>


      <div style={navBarStyle}>
        <div className="container">
          {" "}
          <br />
          {/* <h4 className='display-6 pt-5 pb-3'> TP Detector</h4> */}
          <Navbar expand="lg" style={navbarStyle}>
            <Container>
              {/* <Navbar.Brand href="#home" className="display-3" >TP Detector</Navbar.Brand> */}
              <Navbar.Brand href="#home">
    <Image src={TP} alt="TP Detector Logo" style={{ width: '70px', height: 'auto' }} className="display-3" />
  </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto me-2">
                  <Nav.Link href="./SignUp" className="">
                    Sign-Up
                  </Nav.Link>
                  <Nav.Link href="/Login" className="gx-5">Login</Nav.Link>


                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>



          <h1 className="text-center" style={{ fontSize: "50px" }}>TP Detector</h1><br/>


          
          <h5 className="text-center fst-italic text-decoration-underline">
            Human or AI?
          </h5>
          <p className="text-center fst-italic lh-lg fs-6">
            Know the Originality and Authenticity of any Research <br />
            TP Detector is a reliable tool to make sure the written content is
            original, written by a human and AI generated? <br />
            Detect the new Tortured Phrases (TP), Copied and Synthetic Images,
            and Language Quality in a research paper
          </p>
          <div className="d-flex justify-content-center">
            <Button className="border border-success text-dark fst-italic p-3 bg-white rounded" href='/Login'>
              Check Your Article
            </Button>
          </div>
          <br />
          <p className="fs-3 text-center"> Our Features</p>
          <div className="container ">
            <p className="fst-italic 1h-sm">
              We offer various features to help our users know the paraphrased
              technical sentences | | tortured phrases generated by using
              Thesaurus or AI tools, check whether or not an image is original |
              | AI-Generated | | Copied, from which original image it has been
              generated from, and which regions of the image have been used
              without citing the original research article.
            </p>
          </div>
          <br />
          <div className="container px-auto bg-white points border border-success container-1">
            <div className="row">
              <div className="col">
                <h6 className="text-decoration-underline fst-italic text-center me-3 col-sm">
                  TP Detector: You now know the quality of your research
                </h6>
                <br />
                <div>
                  <p>
                    <strong>
                      Protect your research from Rejection/Retraction:
                    </strong>
                    <span>
                      Proofread your article <br /> from the potential for any
                      publisher penalizing AI content and only publish <br />
                      the research content you know the true Originality of.
                    </span>
                  </p>
                  <span></span>

                  <p>
                    <strong>Detect whether the content is AI written:</strong>

                    <span>
                      With all tortured phrases and <br /> Research results
                      saved in one place. You will no longer required to rely on
                      <br />
                      the publisher side quality check or waste time by manually
                      proof-reading it <br /> by yourself.
                    </span>
                  </p>

                  <p>
                    <strong>Full Research Analyzer:</strong>
                    <span>
                      Scan your entire research article/theme/result <br />{" "}
                      output images to understand the risk of publishing the
                      article that has the <br /> potential of getting flagged
                      as a problematic paper by publisher even after <br /> the
                      publication.
                    </span>
                  </p>

                  <p>
                    <strong>Rank better in Research:</strong>

                    <span>
                      In various scholarly indexes and engine using our <br />{" "}
                      best-in-class research novelty and quality detection
                      feature ensures you to <br />
                      produce a high-quality research content and gain more
                      citations.
                    </span>
                  </p>
                </div>
              </div>

              <div className="col">
                <img src={image} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div> 
       </div>
    </form>
  );
};

export default Home;
