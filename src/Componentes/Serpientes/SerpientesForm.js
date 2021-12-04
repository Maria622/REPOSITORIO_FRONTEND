 import React  , {Component} from "react";
import SerpientesLista from "./SerpientesLista";
import axios from "axios";


 class SerpientesForm extends React.Component{

constructor (props){

    super(props)
    this.state={

    }
}

submitNuevaSerpiente( event){
    event.preventDefault();
   //hacer la peticion via axios
   axios.post('http://localhost:5000/serpientes', {

                                                          nombre: this.refs.nombre.value,
                                                          tipo : this.refs.tipo.value,
                                                          color: this.refs.color.value,
                                                          

                                                }
   ).then( response =>console.log(response.data))
   .catch( error => console.log(error))
   

}






  render(){
      return(
        <div className="row">
        <h5 className="center">Nueva Serpiente *-*</h5>
       <form className="col s12"  onSubmit={ this.submitNuevaSerpiente.bind(this)} >
     <div className="row">
        <div className="input-field col s6">
        <input id="nombre" ref="nombre" type="text" />
        <label htmlfor="nombre">Nombre</label>
        </div>
       <div className="input-field col s6">
       <input id="tipo" ref="tipo" />
      <label htmlfor="tipo">Tipo</label>
      </div>
    
        <div className="input-field col s6">
       <input id="color" ref="color" type="text" />
      <label htmlfor="color">Color</label>
     </div>


<button 
type="submit"
className="waves-effect waves-light btn #9575cd deep-purple lighten-2"
name="action">
 Registrar
</button>
</div>






</form>
  </div>
      )
  }

 }
 export default SerpientesForm