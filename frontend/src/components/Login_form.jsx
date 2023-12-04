import React, {useState} from 'react'
//import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react'
import { useUserContext } from './UserContext'

const Login_form = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUserContext()
  //const navigate = useNavigate()

  const  handlerSubmit = async () => {
    try {
      await fetch("https://localhost:2026/blog/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })

      const data = await response.json();
      console.log('Data; ', data);
      const token = data.token
      const userName = data.name
      localStorage.setItem("token", token)
      localStorage.setItem("userName", userName)
      login({userNanme : userName})
    //   //navigate('/panel)
    } catch(e){
      console.error(e);
    }
  }

  return (    
    <form className="flex max-w-md flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label onChange={(e) => setEmail(e.target.value)}  htmlFor="email" value='Correo electrónico'/>
      </div>
      <TextInput id="email" type="email" required />
    </div>
    <div>
      <div className="mb-2 block">
        <Label onChange={(e) => setPassword(e.target.value)} htmlFor="password" value='Contraseña'/>
      </div>
      <TextInput id="password" type="password" required />
    </div>
    <Button onClick={handlerSubmit} type="submit">Submit</Button>
  </form>
);
}

export default Login_form