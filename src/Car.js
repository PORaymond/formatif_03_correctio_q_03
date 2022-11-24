import {Component} from "react";

class Car extends Component {
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
         </div>
      );
   }
}
export default Car;
