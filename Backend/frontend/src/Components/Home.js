import React from 'react'
import NavBar from '../Shared/NavBar'
import Contact from './Contact'
import LoginRegister from './User/LoginRegister'
import Footer from '../Shared/Footer'
import Bande from './Bande'


const Home = () => {
  return (
    <div>
<NavBar></NavBar>
<Contact></Contact>
<LoginRegister></LoginRegister>
<Bande></Bande>
<Footer></Footer>
    </div>
  )
}

export default Home