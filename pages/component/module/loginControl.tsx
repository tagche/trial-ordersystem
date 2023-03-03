import { useState, useContext } from 'react'
import { userList } from '@/pages/api/users'
import { loginContext } from '../../index'
import { TextField, Button } from '@mui/material'

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
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue={userEmail}
                    onChange={handleChange}
                    sx={{margin: '1em 0'}}
                    />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    defaultValue={userPassword}
                    onChange={handleChangePassword}
                    />
                <br />
                <Button type="submit">Login</Button>
            </form>
            : <p></p>
        }
        </>
    )
}