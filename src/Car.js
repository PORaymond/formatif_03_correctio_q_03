import {Component} from "react";

class Car extends Component {
   render() {
      console.log(this.props)
      return(
         <div>
            <h1>Une voiture</h1>
         </div>
      );
   }
}
export default Car;
