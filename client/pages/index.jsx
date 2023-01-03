import Head from 'next/head'
import Button from './components/button.components'
import Api from './components/api.components'
import Navbar from './components/navbar.components'

export default function Home() {
  return(
    <>
    <Navbar/>
    <br/>
    <Button/>
    <hr/>
    <Api/>
    </>
  )
}