import './Formcomponent.css'
import { useState } from 'react'
const Formcomponent = () => {
    // Create state to  save the data 
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    //error message 
    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')

    //setColor
    const [UserNamecolor, setUserNamecolor] = useState('')
    const [Emailcolor, setEmailcolor] = useState('')
    const [Passwordcolor, setPasswordcolor] = useState('')
    const [Repasswordcolor, setRepasswordcolor] = useState('')


    const validateForm = (e) => {
        e.preventDefault()

        //check username
        if (userName.length >= 8) {
            setErrorUserName('')
            setUserNamecolor('green')
        } else {
            setErrorUserName('Please collect username at least 8 charactor')
            setUserNamecolor('red')
        }
        // email checking 
        if (email.includes('@')) {
            setErrorEmail('')
            setEmailcolor('green')
        }
        else {
            setErrorEmail('Invalid Form')
            setEmailcolor('red')
        }

        if (password.length >= 8) {
            setErrorPassword('')
            setPasswordcolor('green')
        } else {
            setErrorPassword('please collect the password at least 8 charactor')
            setPasswordcolor('red')
        }
        if (repassword != "" && repassword === password) {
            setErrorRePassword('')
            setRepasswordcolor('green')
        }
        else {
            setErrorRePassword('Not match')
            setRepasswordcolor('red')
        }
    }
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ borderColor: UserNamecolor }}></input>
                    <small style={{ color: UserNamecolor }}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: Emailcolor }}></input>
                    <small style={{ color: Emailcolor }}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: Passwordcolor }}></input>
                    <small style={{ color: Passwordcolor }}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm - Password</label>
                    <input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} style={{ borderColor: Repasswordcolor }}></input>
                    <small style={{ color: Repasswordcolor }}>{errorRePassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Formcomponent