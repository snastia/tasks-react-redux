import { AuthNav } from 'components/AuthNav/AuthNav'
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { selectIsLogged } from 'redux/selectors'

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLogged)

    return (
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}       
        </header>
    )
}