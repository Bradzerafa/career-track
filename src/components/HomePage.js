import React from "react";
import Container from "react-bootstrap/Container";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import NavbarComp from "./NavbarComp";

const HomePage = () => {
  console.log(window.location.hash);
  let url = window.location.hash;
  if (url === "#home" || url === "") {
    return (
      <Container fluid>
        <NavbarComp />
        <h1>Welcome to Personal Track</h1>
        <h2>Track your Financial and Career Progression</h2>
      </Container>
    );
  } else if (url === "#about") {
    return (
      <Container fluid>
        <AboutUs />
      </Container>
    );
  } else if (url === "#contact") {
    return (
      <Container fluid>
        <ContactForm />
      </Container>
    );
  } else {
    return <h1>Home Page Error</h1>;
  }
};

export default HomePage;
