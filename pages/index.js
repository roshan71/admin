import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Admin from '../components/layouts/Admin'
import Dashboard from './dashboard'
export default function Home() {
  return (
  <>
    <Dashboard/>
  </>
  )
}

