import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import './user.css'


function User() {
    const state = useContext(GlobalState);
    const [user, setUser] = state.userAPI.user;
    const [setHistory] = state.userAPI.history;
    const [token] = state.token;
    const [callback, setCallback] = state.userAPI.callback;
    const [onEdit, setOnEdit] = useState(false);
    const params = useParams();
    const histories = useHistory();

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                const res = await axios.get("/user/infor", {
                    headers: { Authorization: token }
                })
                setUser(res.data)
            }
            getUser()
        }
    }, [token, setUser]);
    useEffect(() => {
        if (token) {
            const getHistory = async () => {
                const res = await axios.get("/user/history", {
                    headers: { Authorization: token }
                })
                setHistory(res.data)
            }
            getHistory()
        }
    }, [token, setHistory]);
    useEffect(() => {
        if (params.id === user._id) {
            setOnEdit(true)
        } else {
            setOnEdit(false)
        }
    }, [params.id, user])

    const handleChangInput = async (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (onEdit) {
                await axios.put(`/user/infor/${user._id}`, {
                    ...user,
                }, {
                    headers: { Authorization: token }
                })
            }
            setCallback(!callback)
            histories.push("/user")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="update_user col-lg-9 my-3">
                    <h2>Thông tin tài khoản</h2>
                    <form onSubmit={handleSubmit}>
                        <div className=" user-info d-block">
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" id="email" value={user.email} disabled={true} />
                        </div>
                        <div className=" user-info">
                            <label htmlFor="name">Tên tài khoản: </label>
                            <input type="text" name="name" id="name" required onChange={handleChangInput} value={user.name} disabled={!onEdit} />
                        </div>
                        <div className=" user-info">
                            <label htmlFor="phone">Số điện thoại: </label>
                            <input type="text" name="phone" id="phone" required onChange={handleChangInput} value={user.phone} disabled={!onEdit} />
                        </div>
                        <div className=" user-info">
                            <label htmlFor="address">Địa chỉ: </label>
                            <input type="text" name="address" id="address" required onChange={handleChangInput} value={user.address} disabled={!onEdit} />
                        </div>

                        {onEdit ? (<div className="user-update row justify-content-center mt-2">
                            <div className="user_btn"><button type="submit" className="">Update</button></div>
                        </div>) : (<div className="user-update row justify-content-center mt-2">
                            <div className="user_btn"><Link to={`/user/${user._id}`}>Sửa</Link></div>
                        </div>)}
                    </form>
                </div >
            </div>
        </div >
    )
}

export default User