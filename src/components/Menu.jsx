
import {useRef} from "react";

import {FaGithub, FaLinkedinIn} from "react-icons/Fa";
import {SiInstagram} from "react-icons/si";

import {GiHamburgerMenu} from "react-icons/Gi";


const Menu = (props) =>{


    const menuResponsibe = useRef()
    const {accionMenu} = props;

    const openMenu = () =>{
        menuResponsibe.current.classList.add("showMenu");
    };

    const closeMenu = () =>{
        menuResponsibe.current.classList.remove("showMenu");
    };

    const accionMenuDos = (name) =>{
        accionMenu(name);
        closeMenu();
    }

    return(
        <nav className="nav">
            <div className="logo">
                <h4>FreddyR.DEV</h4>
            </div>
            <div className="contenedor__menuItens" onClick={(e) => accionMenu(e.target.innerHTML)}>
                <a  className="menuIten">Inicio</a>
                <a  className="menuIten">Sobre mi</a>
                <a  className="menuIten">Proyectos</a>
            </div>
            <div className="contenedor__menuHamb" onClick={openMenu}>
                <button className="btn__menuHambur"><GiHamburgerMenu/></button>
            </div>


            <div className="menu__responsibo" ref={menuResponsibe}>
                <button className="btn__cerrarMenu" onClick={closeMenu}>X</button>
                <div className="header__menu">
                    <h4>Freddy Rengel</h4>
                    <span>Javascript Developer</span>
                </div>
                <div className="menu__itensResp">
                    <h4>Menu</h4>
                    <a className="iten__menuResponsibo" onClick={(e) => accionMenuDos(e.target.innerHTML)}>Inicio</a>
                    <a className="iten__menuResponsibo" onClick={(e) => accionMenuDos(e.target.innerHTML)}>Sobre mi</a>
                    <a className="iten__menuResponsibo" onClick={(e) => accionMenuDos(e.target.innerHTML)}>Proyectos</a>
                </div>
                <div className="contacto__menuResponsive">
                    <a href="https://github.com/freddyrengel27" className="linkResposibe"><FaGithub /></a>
                    <a href="https://www.instagram.com/27freddyrengel/" className="linkResposibe"><SiInstagram /></a>
                    <a href="https://www.linkedin.com/in/freddy-rengel-82941a238" className="linkResposibe"><FaLinkedinIn /></a>
                </div>
            </div>

        </nav>
    )
};

export default Menu;