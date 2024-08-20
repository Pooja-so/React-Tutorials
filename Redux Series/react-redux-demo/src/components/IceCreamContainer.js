import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of ice creams: {props.numOfIceCreams} </h2>
      <button onClick={props.buyIceCream}>Buy ice cream</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
