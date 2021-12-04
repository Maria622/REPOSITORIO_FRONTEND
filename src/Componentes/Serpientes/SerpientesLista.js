import React from "react";


const SerpientesLista = ( props )=>{

return(
  <>
<ul class="collection with-header">
        <li
         className="collection-header"><h4>Serpientes u.u</h4></li>
        
        {
            props.lista.map(  (elemento)=>{
             return(
                <li 

                className="collection-item"
                key={elemento._id} 
                onClick={props.actulizarSerpiente.bind(this , elemento)}
                >
                    {elemento.nombre}  
                </li>
             )
            })
        }
            
        
   

      </ul>
</>
)
}

export default SerpientesLista