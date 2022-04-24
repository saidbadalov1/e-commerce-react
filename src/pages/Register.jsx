import React, { useState } from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [background, setBackground] = useState("white")

    const div = document.getElementById('errorsuccess');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setBackground("red-600")
            div.innerHTML = "Type a username and password!"
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        } else if (password.length < 7) {
            setBackground("red-600")
            div.innerHTML = "Password lenght must be > 8 characters!"
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        } else if (fullname.length < 2) {
            setBackground("red-600")
            div.innerHTML = "Fullname lenght must be > 2 characters!"
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        } else if (username.indexOf("@") === -1 || username.indexOf(".") === -1) {
            setBackground("red-600")
            div.innerHTML = "Email must be contain '@'!"
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        } else if (username.indexOf(".") === -1) {
            setBackground("red-600")
            div.innerHTML = "Email format is wrong!"
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        } else {
            setBackground("green-500")
            div.innerHTML = "Sign up..."
            window.location.href = '/';
            setTimeout(() => {
                setBackground("white")
                div.innerHTML = ""
            }, 2000);
        }
    }


  return (
    <div>
        <Announce/>
        <Navbar/>
            <div className='h-[405px] mt-20 flex mobile:relative'>
                <div className="mobile:hidden login-left flex-1 h-[400px] ">
                    <img src="https://firstatlanticcommerce.com/wp-content/uploads/2020/07/online-shopping-ecommerce-ss-1920.png" alt="s" />
                </div>
                <div className="login-right flex flex-1 h-[400px] w-[50%] items-center justify-center  flex-col">
                <div id='errorsuccess' className={`div mb-5 bg-${background} text-white p-3 rounded-2xl`}></div>
                <form onSubmit={handleSubmit}  className='flex flex-col w-[100%] items-center'>
                    <input value={fullname} onChange={e => setFullname(e.target.value)} placeholder='Full Name' type="text" id="fullname"  className='input w-[60%] rounded-xl p-2 border-2'/>
                    <input onChange={e => setUsername(e.target.value)} placeholder='Email' value={username}  type="text" id="sfullname"  className='input w-[60%] rounded-xl p-2 border-2 mt-3'/>
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' id="password" className='input w-[60%] rounded-xl p-2 border-2 mt-3' />
                    <input type="submit" value="Sign up" className='w-[60%] rounded-xl p-1 border-2 mt-3 cursor-pointer' />
                    </form>
                </div>
            </div>
        <Subscribe/>
    </div>
  )
}

export default Register