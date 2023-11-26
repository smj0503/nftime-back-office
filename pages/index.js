import ActionButton from "@/components/ActionButton";

import styles from "../styles/Login.module.css";
import Logo from "/public/assets/logo/logo-login.svg";

export default function ()
{
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
                        <input placeholder="ID"/>
                        <input placeholder="Password"/>
                    </div>
                    <ActionButton fill={true}>{ "Login" }</ActionButton>
                </div>
            </div>
        </div>
    )
}