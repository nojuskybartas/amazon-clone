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
        <div className="h-16 w-full flex items-center sticky bg-gray-900 top-0 z-10 space-x-3 justify-between">
            <Link to='/'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='h-12 w-fit m-0 ml-4 mt-4'/>
            </Link>
            <div className='flex flex-1 items-center rounded-md overflow-hidden'>
                <input type='text' className='w-full h-8'/>
                <SearchIcon className='p-2 h-8 w-fit bg-primary'/>
            </div>
            <div className='flex justify-evenly items-center'>
                <Link to={!user && '/login'}>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className="header_option_lineOne">{user ? `Hello ${user.email}` : 'Hello guest'}</span>
                        <span className="header_option_lineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className="header_option_lineOne">Returns &</span>
                    <span className="header_option_lineTwo">Orders</span>
                </div>
                <div className='header_option'>
                    <span className="header_option_lineOne">Your</span>
                    <span className="header_option_lineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_option flex flex-row items-center space-x-2 mr-6'>
                        <ShoppingCartIcon className='h-8 w-fit'/>
                        <span className='header_option_lineTwo'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
