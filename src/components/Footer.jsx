import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { background: "linear-gradient(to bottom, #ffffff, #f0f2f5)" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
{/*         <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "} */}
{/*         <a */}
{/*           rel="noopener" */}
{/*           href="https://github.com/Vaidehi-Joshi" */}
{/*           aria-label="My GitHub" */}
{/*         > <span className="badge bg-dark"> */}
{/*             Vaidehi Joshi */}
{/*           </span> */}
{/*         </a>{" "} */}
{/*         using <i className="fab fa-react" /> */}
{/*         <p> */}
{/*           <small className="text-muted"> */}
{/*             Project code is open source. Feel free to fork and make your own */}
{/*             version. */}
{/*           </small> */}
{/*         </p> */}
      </Container>
    </footer>
  );
};

export default Footer;
