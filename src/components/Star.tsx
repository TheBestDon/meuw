import { FaStar } from "react-icons/fa";


const Star = ({ filled }) => {
  return (
    <FaStar
     color={filled ? "var(--clr-primary)" : "lightgray"} />
  );
}
export default Star;
