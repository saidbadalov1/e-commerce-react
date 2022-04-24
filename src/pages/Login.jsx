import React, { useState } from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [background, setBackground] = useState("white")

    const div = document.getElementById('errorsuccess');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "" || username.indexOf('@') !== -1 || username.indexOf('.') !== -1 || username.indexOf('@') !== -1 ) {
            setBackground("red-600")
            div.innerHTML = "Incorrect password or email!"
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        } else {
            setBackground("green-500")
            div.innerHTML = "Sign in..."
            window.location.href = '/';
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        }
    }


    return (
        <div>
            <Announce />
            <Navbar />
            <div className='h-[405px] mt-20 flex'>
                <div className="mobile:hidden login-left flex-1 h-[400px] ">
                    <img src="https://firstatlanticcommerce.com/wp-content/uploads/2020/07/online-shopping-ecommerce-ss-1920.png" alt="s" />
                </div>
                <div className="login-right flex flex-1 h-[400px] w-[70%] items-center justify-center  flex-col">
                    <form onSubmit={handleSubmit} className='flex flex-col w-[100%] items-center'>
                        <div id='errorsuccess' className={`div mb-5 bg-${background} text-white p-3 rounded-2xl`}>
                        </div>
                        <input onChange={e => setUsername(e.target.value)} placeholder='Email' value={username} type="text" name="" id="fullname" className='input w-[60%] rounded-xl p-2 border-2' />
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} name="" id="password" className='input w-[60%] rounded-xl p-2 border-2 mt-3' />
                        <input type="submit" value="Sign in" className='w-[60%] rounded-xl p-1 border-2 mt-3 cursor-pointer' />
                    </form>
                </div>
            </div>
            <Subscribe />
        </div>
    )
}

export default Login