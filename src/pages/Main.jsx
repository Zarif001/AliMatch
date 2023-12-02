import React from 'react'
import styles from'./index.module.scss'
import Container from '../components/Container/Container'
import About from '../components/About/About'
import Advantages from '../components/Advantages/Advantages'
import Price from '../components/Price/Price'

function Main () {
    return(
        <div className={styles.main}>
            <Container>
            <About/>
            <Advantages/>
            {/* <Price/> */}
            </Container>
        </div>
    )
}
export default Main