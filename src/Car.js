import {Component} from "react";

class Car extends Component {
   state = {
      couleurSt:'rouge', marqueSt:'Reh', kmSt:'100 km'
   }
   onCouleurChange = () => {
      this.setState({couleurSt:'noire'});
   }
   onMarqueChange = () => {
      this.setState({marque:'ford'});
   }
   onKmChange = () => {
      this.setState({kmSt:'20 km'});
   }
   render() {
      console.log(this.props)
      return(
         <div>
            <h1>Une voiture</h1>
            <p>
               Entrer couleur : <input type="text" placeholder="couleur"/>
            </p>
            <p>
               Entrer marque : <input type="text" placeholder="marque"/>
            </p>
            <p>
               Entrer kilométrage : <input type="text" placeholder="kilométrage"/>
            </p>
            <p>la couleur est {this.state.couleurSt} onChange = {this.onCouleurChange} </p>
            <p>la marque est {this.state.marqueSt} onChange = {this.onMarqueChange}</p>
            <p>le kilométrage{this.state.kmSt}onChange = {this.onKmChange}</p>

         </div>
      );
   }
}
export default Car;
