import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
const ProtectedLink = ({ children }) => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? children : null;
};

export default ProtectedLink;