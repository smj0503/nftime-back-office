import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";

import { signin } from "@/apis/signin.api";

import ActionButton from "@/components/ActionButton";

import styles from "../styles/Login.module.css";
import Logo from "/public/assets/logo/logo-signin.svg";
import Thumbnail from "/public/assets/photo/photo-login.png";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onIdChange = (e) =>
    {
        setId(e.target.value);
    };

    const onPasswordChange = (e) =>
    {
        setPassword(e.target.value);
    };

    const onClick = async () =>
    {
        const result = await signin(id, password);

        console.log('result : ', result);

        // await router.push('/register/company');
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.thumbnail }>
                <Image src={ Thumbnail } width={683} height={702} alt="login image" priority={true}/>
            </div>
            <div className={ styles.login }>
                <div className={ styles.loginBox }>
                    <Logo/>
                    <div className={ styles.description }>
                        <span className={ styles.title }>{ t("signIn.loginToYourAccount") }</span>
                        <span className={ styles.subTitle }>{ t("signIn.pleaseEnterYourDetails") }</span>
                    </div>
                    <div className={ styles.inputContainer }>
                        <input type="text" placeholder="ID" onChange={ onIdChange }/>
                        <input type="password" placeholder="Password" onChange={ onPasswordChange }/>
                    </div>
                    <ActionButton disabled={ !(!!id && !!password) } width={322} onClick={ onClick }>{ t("signIn.login") }</ActionButton>
                </div>
            </div>
        </div>
    )
}
