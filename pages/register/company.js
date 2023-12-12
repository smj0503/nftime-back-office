import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { registerCompany } from "@/apis/register.api";

import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";
import CompanyRegisterContainer from "@/components/RegisterContainer/Company";
import ActionButton from "@/components/ActionButton";
import Toast from "@/components/Toast";

import styles from "../../styles/Register.module.css";

export default function ()
{
    /* Local Fields */
    const { t } = useTranslation("common");
    const router = useRouter();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const [isOpened, setIsOpened] = useState(true);

    /* User Actions */
    const onSubmit = async (e) =>
    {
        e.preventDefault();

        const formData = new FormData();
        formData.append('company_image', image);
        formData.append('company_name', name);
        formData.append('company_description', description);
        formData.append('company_website', url);

        await registerCompany(formData);
    };

    const onClick = async () =>
    {
        await router.push('/register/certificate');
    };

    const onClose = () =>
    {
        setIsOpened(false);
    };

    return (
        <AppLayout category={ t("topBar.register") } menu={ t("topBar.company") } >
            <form className={ styles.container } onSubmit={ onSubmit }>
                <span className={ styles.title }>{ t("register.company.registerCompany") }</span>
                <div className={ styles.formContainer }>
                    <div className={ styles.inputContainer }>
                        <ImageUploader setImage={ setImage }>{ t("register.company.image") }</ImageUploader>
                        <CompanyRegisterContainer setName={ setName } setDescription={ setDescription } setUrl={ setUrl }/>
                    </div>
                    <ActionButton type="submit" width={185} disabled={ !(!!image && !!name && !!description && !!url) } onClick={ onSubmit }>{ t("register.buttonTitle") }</ActionButton>
                </div>
            </form>
            {/*{*/}
            {/*    isOpened && <Toast state="fail" message="Would you like to register a certificate as well?" close={ onClose } onClick={ onClick }/>*/}
            {/*}*/}
        </AppLayout>
    )
}
