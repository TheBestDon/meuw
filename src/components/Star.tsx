import { FunctionComponent } from "react";
import { FaStar } from "react-icons/fa";


const Star: FunctionComponent<{filled: boolean}> = ({ filled }) => {
  return (
    <FaStar
     color={filled ? "var(--clr-primary)" : "lightgray"} />
  );
}
export default Star;
