import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(0.2);
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation(0.3, 200);
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2, 400);

  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              ref={imageRef}
              className={`border border-secondary rounded-circle scroll-animate-scale ${imageVisible ? 'animate-in' : ''}`}
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 
            ref={headingRef}
            className={`display-4 mb-5 text-center scroll-animate ${headingVisible ? 'animate-in' : ''}`}
          >
            {heading}
          </h2>
          <div ref={contentRef} className={`scroll-animate ${contentVisible ? 'animate-in' : ''}`}>
            <p className="lead text-center">{message}</p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
