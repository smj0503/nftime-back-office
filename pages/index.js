import { useState } from "react";

import ActionButton from "@/components/ActionButton";

import styles from "../styles/Login.module.css";
import Logo from "/public/assets/logo/logo-signin.svg";

export default function ()
{
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onIdChange = (e) =>
    {
        setId(e.target.value);
    }

    const onPasswordChange = (e) =>
    {
        setPassword(e.target.value);
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.thumbnail }></div>
            <div className={ styles.login }>
                <div className={ styles.loginBox }>
                    <Logo/>
                    <div className={ styles.description }>
                        <span className={ styles.title }>{ "Log in to your account" }</span>
                        <span className={ styles.subTitle }>{ "Please enter your details." }</span>
                    </div>
                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder="ID" onChange={ onIdChange }/>
                        <input type="password" placeholder="Password" onChange={ onPasswordChange }/>
                    </div>
                    <ActionButton width={322}>{ "Login" }</ActionButton>
                </div>
            </div>
        </div>
    )
}