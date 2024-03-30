import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result.user?.metadata?.creationTime
                const user = { email, createdAt }

                fetch('https://coffee-store-server-pi-ten.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

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

                        </div>
                        <input className="form-control btn bg-sky-500 mt-6" type="submit" value="Register" />

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;