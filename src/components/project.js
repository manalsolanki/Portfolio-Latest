import classes from "../styles/content.module.css";
import projectClasses from "../styles/project.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const Project = (props) => {
    // const gotoGithub = () => {window.open(props.project.github)}
    // const goLive = () => {window.open(props.project.link)}
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div onClick={handleShow} tabIndex="0">
                {/* <a href={props.project.link}> */}
                <div className={classes.imgDiv}>
                    <div className={classes.projectTitle}>{props.project.name}</div>
                    <img src={props.project.imgSrc} alt="project" />
                </div>
                <p className={classes.projectDesc} >{props.project.shortDescription}  <br/> <b className={projectClasses.readMore}>Read More..</b></p>
                {/* </a>  */}
            </div>
            <Modal show={show} size="lg" centered>
                <Modal.Header>
                    <Modal.Title>{props.project.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="d-flex">
                        <div className={projectClasses.modalText}>
                        <p><b>Technologies :</b> {props.project.Technologies}</p>
                            <p><b>Roles :</b> {props.project.roles}</p>
                            <p>{props.project.Description}</p>
                            <div>
                            {props.project.github && <a className={projectClasses.modalLink} href={props.project.github}  target="_blank" rel="noreferrer">GitHub</a>} 
                            
                            <a href={props.project.link} className={projectClasses.modalLink}  target="_blank" rel="noreferrer">Live</a>
                            </div>
                        </div>
                        <img className={projectClasses.modalImg} src={props.project.imgSrc} alt="project"/>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Project;
