
import Inicio from "./components/Inicio.jsx";
import Menu from "./components/Menu.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Footer from "./components/Footer.jsx";

import "./assests/css/style.css";
import {useRef} from "react";


function App() {
 
  const sobremi = useRef();
  const proyectos = useRef();


  const scrollMenu = (zona) =>{
    console.log(zona)
    if(zona == "Inicio"){
      scroll({
        top: 0,
        behavior: "smooth"
      });
    }
    if(zona == "Sobre mi"){
      scroll({
        top: sobremi.current.offsetTop - 50,
        behavior: "smooth"
      });
    }
    if(zona == "Proyectos"){
      scroll({
        top: proyectos.current.offsetTop - 50,
        behavior: "smooth"
      }); 
    }
  }

  return (
    <div className="contenedor">
        <Menu accionMenu={scrollMenu} />
        <Inicio accionFlecha={scrollMenu}/>
        <div ref={sobremi}>
          <SobreMi  />
        </div>
        <div ref={proyectos}>
          <Proyectos />
        </div>       
        <Footer />
    </div>
  )
}

export default App
