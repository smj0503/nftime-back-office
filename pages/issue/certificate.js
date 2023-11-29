import { useRouter } from "next/router";
import { useState } from "react";

import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";
import ActionButton from "@/components/ActionButton";
import IssueContainer from "components/IssueContainer/InputContainer";

import styles from "../../styles/Register.module.css";

export default function ()
{
    const router = useRouter();

    const onClick = async () =>
    {
        await router.push('/dashboards/certificate-list');
    };

    return (
        <AppLayout category="Issue" menu="Certificate" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Issue Digital Certificate" }</span>

                <div className={ styles.formContainer }>
                    <div className={ styles.inputContainer }>
                        <ImageUploader></ImageUploader>
                        <IssueContainer/>
                    </div>
                    <ActionButton width={185}>{ "Issue" }</ActionButton>
                </div>
            </div>
        </AppLayout>
    )
}