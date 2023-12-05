import React from 'react'
import styles from'./index.module.scss'
import Container from '../components/Container/Container'
import Info from '../components/Info/Info'
import Contact from '../components/Contact/Contact'

function Footer () {
    return(
        <div className={styles.footer}>
            <Container>
                <Info/>
                {/* <Contact/> */}
            </Container>
        </div>
    )
}
export default Footer