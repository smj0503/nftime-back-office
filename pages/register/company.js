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

    console.log('image : ', image);
    console.log('name : ', name);
    console.log('description : ', description);
    console.log('url : ', url);

    return (
        <AppLayout category="Register" menu="Company" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Register Company" }</span>

                <div className={ styles.submitContainer }>
                    <div className={ styles.inputContainer }>
                        <ImageUploader>{ "Company Image" }</ImageUploader>
                        <CompanyRegisterContainer setName={ setName } setDescription={ setDescription } setUrl={ setUrl }/>
                    </div>

                    <div className={ styles.submitButton }><ActionButton width={185}>{ "Register" }</ActionButton></div>
                </div>
            </div>
        </AppLayout>
    )
}