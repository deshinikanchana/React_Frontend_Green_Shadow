import '../Css/LogIn.css'
import {useState} from "react";
import {useNavigate} from "react-router";

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className="loginDiv">
            <div className="bg-white flex-1 p-10 flex flex-col justify-center">
                <h1 className="text-2xl font-bold mb-2">Green Shadow (PVT) Ltd.</h1>
                <h2>welcome back</h2>
                <p>Thank you for getting back, please login to your account by filling these forms:</p>
                <form onSubmit={handleLogin}>
                    <label>Email Address</label>
                    <input type="email"  placeholder="coolname@name.com" value = {email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type="password"  placeholder="****" value = {password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="options">
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">LOGIN</button>
                </form>
            </div>
            <div className="flex-[1.2] flex justify-center items-center relative">
                <img className="w-full h-[fill-available] object-cover" src="/assets/images/best_logo.jpeg" alt=""/>
            </div>
        </div>
    )
}