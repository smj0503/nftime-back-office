import { useRouter } from "next/router";
import { useState } from "react";

import useIssueModule from "@/apis/issue.api";

import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";
import ActionButton from "@/components/ActionButton";
import IssueContainer from "components/IssueContainer/InputContainer";
import Toast from "@/components/Toast";

import styles from "../../styles/Register.module.css";

export default function ()
{
    /* Local Fields */
    const router = useRouter();

    const [certificate, setCertificate] = useState('');
    const [receiver, setReceiver] = useState('');
    const [address, setAddress] = useState('');

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);

    /* APIs */
    const { issueCertificate } = useIssueModule();

    /* User Actions */
    const onSubmit = (e) =>
    {
        e.preventDefault();

        const formData = new FormData();
    };

    const onClick = async () =>
    {
        await router.push('/dashboards/certificate-list');
    };

    const close = () =>
    {
        setShow(false);
    };

    return (
        <AppLayout category="Issue" menu="Certificate" >
            <form className={ styles.container } onSubmit={ onSubmit }>
                <span className={ styles.title }>{ "Issue Digital Certificate" }</span>
                <div className={ styles.formContainer }>
                    <div className={ styles.inputContainer }>
                        {/*<ImageUploader></ImageUploader>*/}
                        <IssueContainer/>
                    </div>
                    <ActionButton type="submit" width={185} disabled={ !(!!certificate && !!receiver && !!address) }>{ "Issue" }</ActionButton>
                </div>
            </form>
            <Toast state={ success } type="issue" message="Your digital certificate has been issued" close={ close } onClick={ onClick } show={ show }/>
        </AppLayout>
    )
}
