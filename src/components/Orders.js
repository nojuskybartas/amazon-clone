import { child, get, ref } from 'firebase/database';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from "../lib/firebase";
import { useStateValue } from '../StateProvider';
import '../styles/Orders.css'
import Order from './Order';


function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {

        getDocs(collection(db, `users/${user?.uid}/orders`)).then(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ));
        
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
