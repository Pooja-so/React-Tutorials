import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeConatiner = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>(useSelector Hook) Number of Cakes:{numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}> Buy Cake</button>
    </div>
  );
};

export default HooksCakeConatiner;
