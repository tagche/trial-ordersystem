import { useState, useContext } from 'react'
import { userList } from '@/pages/api/users'
import { loginContext } from '../../index'

export default function LoginControl(){
    const {loginStatus, setLogin} = useContext(loginContext)
    
    const [userEmail, setUserEmail] = useState("example@gmail.com")
    const [userPassword, setUserPassword] = useState("1234")

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        userList.map((e) => {
            if(e.email == userEmail) setLogin(true)
        })
        //console.log("loginStatus", loginStatus)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value)
    }

    return(
        <>
        {
            !loginStatus  
            ? <form action="" onSubmit={handleSubmit}>
                <input type="text" value={userEmail} id="email" placeholder='user e-mail' onChange={handleChange} /><br />
                <input type="password" value={userPassword} id="password" placeholder='password' onChange={handleChangePassword} />
                <button type="submit">Login</button>
            </form>
            : <p>ログイン中... <br />{userEmail}</p>
        }
        </>
    )
}