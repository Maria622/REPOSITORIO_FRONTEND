import React from "react";
import axios from "axios";

const SerpientesDetalle =({serpient})=>{


 
 




return(
    
  <div className="row">
  <div className="col s12 m6">
    <div className="card #9575cd deep-purple lighten-2">
      <div className="card-content white-text">
        <span className="card-title">
            {serpient.nombre}
            </span>
        <p>
          Tipo: {serpient.tipo}
        </p>
        <p>
          Color: {serpient.color}
        </p>
      </div>
      <div class="card-action">
        <form onSubmit={ function (event){
           event.preventDefault();

           axios.delete(`http://localhost:5000/serpientes/${serpient._id}`)
             .then(response => {
               console.log(response);
               console.log(response.data);
             })
        }}>
        <button className="waves-effect  red darken-2 btn"  >Eliminar</button>
        </form>
        
      </div>
    </div>
  </div>
</div>
)
}

export default SerpientesDetalle