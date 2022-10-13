import React from 'react'
import SignUpForm from '../components/SignUpForm'

function AuthPage() {

  const handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };
  
  return (
    <main>
            <h1>AuthPage</h1>
            <SignUpForm />
    </main>
  )
}

export default AuthPage