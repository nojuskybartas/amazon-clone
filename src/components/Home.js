import '../styles/Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/61-4NHZDx8L._SX3000_.jpg' alt=''/>
                <div className="home__row">
                    <Product 
                        title='The lean startup'
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        price='19.99'
                        rating={5}/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
