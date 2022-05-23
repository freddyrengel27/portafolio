

import {FaGithub, FaLinkedinIn} from "react-icons/Fa";
import {SiInstagram} from "react-icons/si";
import {AiFillHeart} from "react-icons/Ai";

const Footer = () =>{


    return(
        <footer className="footer">
            <div className="footer__msg">
                <h4>Freddy Rengel</h4>
                <span>Javascript Developer</span>
            </div>
            <div className="footer__contacto">
                <a href="https://github.com/freddyrengel27" className="fin__contacto"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/freddy-rengel-dev" className="fin__contacto"><FaLinkedinIn/></a>
                <a href="https://www.instagram.com/27freddyrengel/" className="fin__contacto"><SiInstagram/></a>
            </div>

        </footer>
    )
};

export default Footer;