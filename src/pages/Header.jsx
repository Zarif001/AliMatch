import React from 'react'
import Nav from '../components/Nav/Nav'
import Content from '../components/Content/Content'
import styles from'./index.module.scss'
import Container from '../components/Container/Container'

function Header() {
    return(
        <div className={styles.header}>
            <Container>
            <Nav/>
            <Content/>
            </Container>
        </div>
    )
}
export default Header