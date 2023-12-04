import React from "react";
import Signup_form from "../components/Signup_form";
import { Nav } from "../components"

import styles from "../style"

const View_signup = () => {
    return (
        <div className={`w-full overflow-hidden`}>
            <div className={` bg-primary ${styles.boxWidth}`}>
                <Nav/>
            </div>
            <h1>Registrarme</h1>
            <Signup_form/>
        </div>

    )
}

export default View_signup