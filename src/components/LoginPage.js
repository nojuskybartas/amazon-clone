import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase';
import '../styles/LoginPage.css'

function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Successfully signed in user!')
            console.log(userCredential)
            if (userCredential) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Successfully created user!')
            console.log(userCredential)
            if (userCredential) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon clone' />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h2>Email</h2>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h2>Password</h2>
                    <input type='password' value={password} onChange={e => {setPassword(e.target.value)}}/>

                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>

                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
                </p>
                <button className='login__registerButton' onClick={register}>Create your fake-amazon account</button>
            </div>
        </div>
    )
}

export default LoginPage
