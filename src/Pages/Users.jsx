import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(users)


    const handleDelete = _id => {
        fetch(`https://coffee-store-server-pi-ten.vercel.app/user/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted success')
                    const remainingUsers = users.filter(user => user._id != _id)
                    console.log(remainingUsers)
                    setUsers(remainingUsers)
                }
            })
    }


    return (
        <div>
            <h2>{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedIn ? user.lastLoggedIn : 'No login detected'}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;