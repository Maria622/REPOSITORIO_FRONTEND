import React from 'react';
import axios from 'axios';
import './App.css';
import SerpientesLista from './Serpientes/SerpientesLista';
import SerpientesDetalle from './Serpientes/SerpientesDetalle';
import SerpientesForm from './Serpientes/SerpientesForm';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      serpientes : [ ],
      serpientesNueva :{}

    }
    this.actulizarSerpiente= this.actulizarSerpiente.bind(this)
  }
componentDidMount(){
  const url = 'http://localhost:5000/serpientes'
  axios.get(url)
  .then((respuesta)=>{
    //actulizar estado serpientes:
    this.setState({
      serpientes: respuesta.data
    })
    
  })
  .catch((error)=>{console.log(error)} )
}


//asignar el estado:serpente actual
actulizarSerpiente(serpiente){
  this.setState({
    serpientesNueva: serpiente  
    }
  )
}




  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
             
          <nav>
           <div class="nav-wrapper #b39ddb deep-purple lighten-3">
            <a href="#!" class="brand-logo">Serpientes +.+</a>
      
  
         </div>
       </nav>
          </div>
  
        </div>
        <div className="row">
          <div className="col s3">
           < SerpientesLista lista={this.state.serpientes} 
            actulizarSerpiente={this.actulizarSerpiente}
              />
          </div>
          <div className="col s9">
            <SerpientesDetalle
                serpient={ this.state.serpientesNueva}
            />
          </div>
  
        </div>
        <div className="row">
          <div className="col s12">
            <SerpientesForm />
          </div>
  
        </div>
  
        
      </div>
    );

  }

}

export default App;
