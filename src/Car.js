import {Component} from "react";

class Car extends Component {
   render() {
      console.log(this.props)
      return(
         <div>
            <h1>Une voiture</h1>
            {this.props.couleur}<br/>
            {this.props.marque}<br/>
            {this.props.km}
         </div>
      );
   }
}
export default Car;
