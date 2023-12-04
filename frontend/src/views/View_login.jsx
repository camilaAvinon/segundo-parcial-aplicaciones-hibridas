import React from "react"
import { Login_form, Nav } from "../components"
import styles from "../style"

const View_login = () => {
    return (
        <div className={`w-full overflow-hidden`}>
            <div className={` bg-primary ${styles.boxWidth}`}>
                <Nav/>
            </div>
            <h1>Iniciá sesión</h1>
            <Login_form/>
        </div>
    )
}

export default View_login

