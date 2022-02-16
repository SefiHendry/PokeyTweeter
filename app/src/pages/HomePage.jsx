import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import FormLogin from '../components/login/FormLogin'
import FormRegister from '../components/register/FormRegister'
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  useEffect(()=>{
    history.push("/login");
  })
  return (
    <div>
    </div>
  )
}

export default HomePage