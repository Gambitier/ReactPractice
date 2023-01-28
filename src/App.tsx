import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
interface ILogin {
  email: string;
  password: string;
}
function App() {
  const [login, setLogin] = useState<ILogin>({
    email : '',
    password : ''
  });
  
  const onchangeLogin = (e : any) => {
    var emailReg = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';
    if(e.target.name == 'email' && e.target.value.test(emailReg)){
      setLogin(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    else{
      alert('Please enter valid email');
    }
    if(e.target.name == 'password' && e.target.value !== ''){
      setLogin(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
  };

  return (
    <div className="App">
       <form>
        <label id="icon" htmlFor="name">Email : <i className="fas fa-envelope"></i></label>
        <input type="text" name="email" id="email" placeholder="Please enter your email" required onChange = {(e : any) => onchangeLogin(e)} />
        <br></br>
        <label id="icon" htmlFor="name">Password : <i className="fas fa-unlock-alt"></i></label>
        <input type="password" name="password" id="name" placeholder="Password" required onChange = {(e : any) => onchangeLogin(e)}/>
        <br></br>
        <button type="submit" className="registerbtn" onClick={(e : any)=> console.log(login)}>Register</button>          
        </form>
    </div>
  )
}

export default App
