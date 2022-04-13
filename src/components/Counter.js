import React, {Component} from "react";

class Counter extends Component {
   state = {
       count: 0,
   };
   increase () {
       this.setState({
           count: this.state.count + 1,
       });
   }




    render() {
        return (
          <>
            <p> number: {this.state.count } </p>
            <button onClick={() => this.increase() } >Artsin</button>
          </>
        );
    }
}

export default Counter;