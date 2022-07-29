import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'

function UserManager() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isAdmin
    const [user, setUser] = state.userAPI.user
    const [token] = state.token

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                if (isLogged) {
                    const res = await axios.get('/user/users', {
                        headers: { Authorization: token }
                    })
                    setUser(res.data)
                } else {
                    alert("Lỗi")
                }
            }
            getUser()
        }
    }, [token, setUser, isLogged])


    return (
        <div>
            <h2>User Manager</h2>

            <h4>You have {user.length} User</h4>

            <div className="user-page row justify-content-center">
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Create At</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(items => (
                                <tr key={items._id}>
                                    <td>{items._id}</td>
                                    <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManager