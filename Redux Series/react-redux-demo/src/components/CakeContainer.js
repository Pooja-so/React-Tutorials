import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeConatiner = (props) => {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

//* Step 1: Define mapStateToProps
/*-> It recives two parameters: 
    1. state and 
    2. ownProps: props of the component itself (CakeConatiner here) 
  -> It return an object whose properties are passed as an additional props to the component (CakeConatiner here)
*/
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

//* Step 2: Define mapDispatchToProps
/* -> It recives two parameters: 
    1. dispatch and 
    2. ownProps: props of the component itself (CakeConatiner here) 
  -> It return an object whose properties are passed as an additional props to the component (CakeConatiner here)
*/
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//* Step 3: Connect functions mapStateToProps & mapDispatchToProps with the component
export default connect(mapStateToProps, mapDispatchToProps)(CakeConatiner);
