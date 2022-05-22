
import {FaGithub} from "react-icons/Fa";

import clontagram from "../assests/img/clontagramImg.png"
import cloneComerce from "../assests/img/clonecomerceImg.png"
import sistema from "../assests/img/uniImg.png"

const Proyectos = () =>{


    return(
        <section className="proyectos">
            <h4 className="title title__proyectos">Proyectos</h4>
            <div className="contenedor__proyectos">

                <div className="proyecto">
                    <div className="img__proyecto">
                        <img src={clontagram}/>
                    </div>
                    <div className="proyecto__info">
                        <h4 className="titulo">Clontagram</h4>
                        <div className="tecnologias">
                            <span style={{color: "#61DBFB"}} className="tecnologia">React</span>
                            <span style={{color: "#3CB73A"}} className="tecnologia">NodeJs</span>
                            <span style={{color: "#B9B9B9"}} className="tecnologia">ExpressJs</span>
                            <span style={{color: "#F29111"}} className="tecnologia">Mysql</span>
                        </div>

                        <a href="https://github.com/freddyrengel27/clontagram" className="btn__verCodigo">Ver codigo <FaGithub /></a>
                    </div>
                </div>

                <div className="proyecto">
                    <div className="img__proyecto">
                        <img src={cloneComerce}/>
                    </div>
                    <div className="proyecto__info">
                        <h4 className="titulo">CloneComerce</h4>
                        <div className="tecnologias">
                            <span style={{color: "#41B883"}} className="tecnologia">Vue</span>
                            <span style={{color: "#3CB73A"}} className="tecnologia">NodeJs</span>
                            <span style={{color: "#B9B9B9"}} className="tecnologia">ExpressJs</span>
                            <span style={{color: "#F29111"}} className="tecnologia">Mysql</span>
                        </div>

                        <a href="https://github.com/freddyrengel27/proyect-ecommerce" className="btn__verCodigo">Ver codigo <FaGithub /></a>
                    </div>
                </div>

                <div className="proyecto">
                    <div className="img__proyecto">
                        <img src={sistema}/>
                    </div>
                    <div className="proyecto__info">
                        <h4 className="titulo tituloUni">Sistema de diseño de horarios</h4>
                        <div className="tecnologias">
                            <span style={{color: "#41B883"}} className="tecnologia">Vue</span>
                            <span style={{color: "#3CB73A"}} className="tecnologia">NodeJs</span>
                            <span style={{color: "#B9B9B9"}} className="tecnologia">ExpressJs</span>
                            <span style={{color: "#F29111"}} className="tecnologia">Mysql</span>
                        </div>

                        <a href="https://github.com/freddyrengel27/proyecto-uni" className="btn__verCodigo">Ver codigo <FaGithub /></a>
                    </div>
                </div>

            </div>

        </section>
    )
};

export default Proyectos;