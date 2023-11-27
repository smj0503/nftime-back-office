import { useState } from "react";

import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";
import CompanyRegisterContainer from "@/components/RegisterContainer/Company";
import ActionButton from "@/components/ActionButton";

import styles from "../../styles/Homepage.module.css";

export default function ()
{
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const onSubmit = async () =>
    {
    }

    return (
        <AppLayout category="Register" menu="Certificate" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Register Certificate" }</span>

                <div className={ styles.formContainer }>
                    <div className={ styles.inputContainer }>
                        <ImageUploader setImage={ setImage }>{ "Certificate Image" }</ImageUploader>
                        <CompanyRegisterContainer setName={ setName } setDescription={ setDescription } setUrl={ setUrl }/>
                    </div>
                    <ActionButton width={185} disabled={ !(!!image && !!name && !!description && !!url) } onClick={ onSubmit }>{ "Register" }</ActionButton>
                </div>
            </div>
        </AppLayout>
    )
}