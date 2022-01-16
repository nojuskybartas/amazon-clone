import { useStateValue } from '../StateProvider'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://m.media-amazon.com/images/I/71smcF8rNpL._SX3000_.jpg' alt='ad'/>
                <div>
                    <h1>Hello, {user?.email}</h1>
                    <h2 className='checkout__title'>Your shopping basket</h2>
                    {basket.map((item, key) => (
                        <CheckoutProduct
                            key={key}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
