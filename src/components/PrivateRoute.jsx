import { useSelector } from "react-redux";
import { selectIsLogged } from "redux/selectors";
import { Navigate } from "react-router-dom";

export function PrivateRoute ({component: Component, redirectTo = '/'}) {
    const isLoggedIn = useSelector(selectIsLogged)
    console.log(isLoggedIn)

    return isLoggedIn ? Component : <Navigate to={redirectTo}/>
}