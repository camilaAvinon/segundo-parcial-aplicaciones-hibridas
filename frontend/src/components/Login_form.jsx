import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useState} from 'react'

const Login_form = () => {
  const endPoint = 'http://127.0.0.1:2026/blog/authentication'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerEmailChange = (event) =>{
        setEmail( event.target.value)
    }

    const handlerPasswordChange = (event) =>{
        setPassword( event.target.value)
    }

    const handlerSubmit = ( event ) => {
        event.preventDefault();
        console.log( email, password );
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);

        fetch(endPoint, {
            method: 'POST',
            body: data
        }).then ( resp => {
            console.log(resp);
            if( ! resp.ok){
                alert('Ocurrio un error');
            }
            return resp.json();
        }).then (respJSON => {
          console.log(respJSON);
        }).catch( error => { console.log(error) })
    }

  return (    
    <form onSubmit={handlerSubmit} className="flex max-w-md flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label onSubmit={handlerEmailChange} htmlFor="email1"/>
      </div>
      <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
    </div>
    <div>
      <div className="mb-2 block">
        <Label onSubmit={handlerPasswordChange} htmlFor="password1"/>
      </div>
      <TextInput id="password1" type="password" required />
    </div>
    {/* <div className="flex items-center gap-2">
      <Checkbox id="remember" />
      <Label htmlFor="remember">Remember me</Label>
    </div> */}
    <Button type="submit">Submit</Button>
  </form>
);
}

export default Login_form