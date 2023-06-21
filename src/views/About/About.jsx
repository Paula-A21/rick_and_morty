/*Esto es completamente libre. Puedes mostrar incluso una imagen tuya. 
Esto le servirá a las personas que vean tu App para conocer al creador 🚀✨.*/
import React from "react";
import final from "./final.gif"
import inicio from "./inicio.gif"

function About(){
    return(
        <div>
            <div>
                <hr></hr>
                <img src={inicio} height={"500px"} width={"600px"} alt="inicio"/>
                <hr></hr>
            </div>
            <div>
                <img src={final} height={"500px"} width={"600px"} alt="inicio"/>
            </div>

        </div>
        
    )
}

export default About;