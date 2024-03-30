import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
    const { login } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(result => {
                console.log(result)
                const lastLoggedIn = result.user?.metadata?.lastSignInTime
                const user = { email, lastLoggedIn }

                fetch('https://coffee-store-server-pi-ten.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })


            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="card shrink-0 w-[1000px] max-w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="form-control btn btn-primary mt-6" type="submit" value="Login" />

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;