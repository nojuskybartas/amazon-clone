import '../styles/Header.css'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom'
import { auth } from '../lib/firebase';
import { useStateValue } from '../StateProvider'

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth)
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__logo'/>
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div className='header__option' onClick={handleAuthentication}>
                        <span className="header__optionLineOne">{user ? `Hello ${user.email}` : 'Hello guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className='header__option'>
                        <span className="header__optionLineOne">Returns &</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingCartIcon className='h-8 w-fit'/>
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
