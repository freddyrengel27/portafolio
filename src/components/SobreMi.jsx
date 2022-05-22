import { useState } from "react";


import {FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs} from "react-icons/Fa";
import {SiExpress, SiJavascript} from "react-icons/Si"
import {DiMysql} from "react-icons/Di";
import mi from "../assests/img/mi.jpg"

const SobreMi = () =>{


    return(
        <section className="sobreMi">
            <div className="contenedor__sobremi">
            <div className="contenedor__foto">
                <img src={mi}/>
            </div>
            <div className="conetenedor__info">
                <h4 className="title titulo__sobreMi">Sobre mi</h4>
    
                <div className="informacion">

                  
                        <p className="texto">Soy Freddy Rengel actualmente cursando el séptimo semestre de ingeniería de sistema, un paccionado de la programación sobre todo del mundo de JavaScript, autodidacta siempre dispuesto a aprender.</p>
                        
                        <h4>Skills</h4>

                        <div className="contenedor__skills">
                            <span className="skill"><FaHtml5 style={{color: "#E34C26", fontSize: "19px"}}/> HTML</span>
                            <span className="skill"><FaCss3Alt style={{color: "#264DE4", fontSize: "19px"}}/> CSS</span>
                             <span className="skill"><SiJavascript style={{color: "#F0DB4F", fontSize: "19px"}}/>JAVASCRIPT</span> 
                            <span className="skill"><FaReact style={{color: "#61DBFB", fontSize: "19px"}}/> REACT</span>
                            <span className="skill"><FaVuejs style={{color: "#41B883", fontSize: "19px"}}/> VUE</span>
                            <span className="skill"><FaNodeJs style={{color: "#3CB73A", fontSize: "19px"}}/> NODEJS</span>
                            <span className="skill"><SiExpress style={{color: "#B9B9B9", fontSize: "19px"}} /> EXPRESS</span>
                            <span className="skill"><DiMysql style={{color: "#F29111", fontSize: "19px"}}/> MYSQL</span>
                        </div>
                    


                </div>
            </div>
            </div>
        </section>
    )
};



export default SobreMi;