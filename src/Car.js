import {Component} from "react";

class Car extends Component {
   state = {
      couleurSt:'rouge', marqueSt:'Reh', kmSt:'100 km',
      couleurStFinal:'',marqueStFinal:'Reh', kmStFinal:'100 km',
   }
   onCouleurChange = (e) => {
      this.setState({couleurSt: e.target.value});
   }
   onMarqueChange = (e) => {
      this.setState({marqueSt: e.target.value});
   }
   onKmChange = (e) => {
      this.setState({kmSt: e.target.value});
   }
   render() {
      console.log(this.props)
      return(
         <div>
            <h1>Une voiture</h1>
            <p>
               Entrer couleur : <input type="text" placeholder="couleur" onChange = {this.onCouleurChange}/>
            </p>
            <p>
               Entrer marque : <input type="text" placeholder="marque" onChange = {this.onMarqueChange}/>
            </p>
            <p>
               Entrer kilométrage : <input type="text" placeholder="kilométrage" onChange = {this.onKmChange}/>
            </p>
            <button onClick={this.changerVoiture}></button><br/>
            <p>la couleur est {this.state.couleurStFinal}</p>
            <p>la marque est {this.state.marqueStFinal}</p>
            <p>le kilométrage est{this.state.kmStFinal}</p>

         </div>
      );
   }
}
export default Car;
