
import {FaGithub, FaLinkedinIn} from "react-icons/Fa";
import {SiInstagram} from "react-icons/si";
import {BsFillArrowDownCircleFill} from "react-icons/bs"

const Inicio = (props) =>{

    const {accionFlecha} = props;


    return(
        <section className="inicio">
            <div className="presentacion">
                <h4>¡HOLA! Soy</h4>
                <h1>Freddy Rengel</h1>
                <h4>Un Javascript Developer</h4>
            </div>
            <div className="contacto">
                <a href="https://github.com/freddyrengel27" className="linkInicio"><FaGithub /></a>
                <a href="https://www.instagram.com/freddyrengel27dev/" className="linkInicio"><SiInstagram /></a>
                <a href="https://www.linkedin.com/in/freddy-rengel-dev" className="linkInicio"><FaLinkedinIn /></a>
                
            
            </div>
            <div className="baja">
                <button className="btnBaja" onClick={() => accionFlecha("Sobre mi")}><BsFillArrowDownCircleFill/></button>

            </div>
        </section>
    )
};

export default Inicio;

