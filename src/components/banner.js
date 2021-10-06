import classes from "../styles/index.module.css";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Typed from "react-typed";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";

const Banner = (props) => {
  const goToGit = () => {
    window.open("https://github.com/manalsolanki");
  };

  const goToLinked = () => {
    window.open("https://www.linkedin.com/in/manal-solanki-96491419b");
  };

  const downloadResume = () => {
    window.open('/ManalSolanki-WebDeveloper.pdf');
  };
  const RenderTooltipEmail = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Email
    </Tooltip>
  );
  const RenderTooltipResume = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Resume
    </Tooltip>
  );
  const RenderTooltipLinkedin = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Linked In
    </Tooltip>
  );
  const RenderTooltipGithub = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );
  return (
    <article className={classes.banner}>
      <div className={classes.bannerOverlay} />
      <div className={classes.bannerText}>
        <p>Hello,</p>
        <p>
          I'm&ensp;
          <span className={classes.nameText}>Manal Solanki</span>
        </p>
        <p>
          A&ensp;
          <Typed
            strings={[
              "Web Developer",
              "Fullstack Developer",
              "UI/UX Designer",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
            backDelay={2000}
          />
          .
        </p>
      </div>
      <div className={classes.iconContainer}>
        
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={RenderTooltipEmail}
          >
        <div className={classes.iconDiv}>
            <a href="mailto:97manal@gmail.com">
              <FaEnvelope style={{ color: "white" }}  />
            </a>
        </div>
        </OverlayTrigger>
        <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={RenderTooltipResume}
          >
        <div className={classes.iconDiv} onClick={downloadResume}>
          <FaFilePdf />
        </div>
        </OverlayTrigger>
        <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={RenderTooltipLinkedin}
          >
        <div className={classes.iconDiv} onClick={goToLinked}>
          <FaLinkedinIn />
        </div>
        </OverlayTrigger>
        <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={RenderTooltipGithub}
          >
        <div className={classes.iconDiv} onClick={goToGit}>
          <FaGithub />
        </div>
        </OverlayTrigger>
      </div>
    </article>
  );
};

export default Banner;
