import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
const PublicLink = ({ children }) => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ?  null: children;
};

export default PublicLink;