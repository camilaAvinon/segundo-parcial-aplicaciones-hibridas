import React from 'react'
import { Nav, Card_post, Card_banner } from './components'
import styles from './style'
const App = () => {
  return (
   <div className={`w-full overflow-hidden`}>
    <div className={` bg-primary ${styles.boxWidth}`}>
      <Nav />
    </div>
    <div className='bg-secondary'>
      <div className={` ${styles.padding} ml-[4.5em]`}>
        <h2 className={`text-5xl text-tertiary `}>Ultimos posteos!</h2>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap justify-evenly`}>
        <Card_post />
        <Card_post />
        <Card_post />
        <Card_post />
        <Card_post />
        <Card_post />

      </div>
        <Card_banner />
    </div>
   </div>
  )
}

export default App