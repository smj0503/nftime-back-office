import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";

import styles from "../../styles/Homepage.module.css";

export default function ()
{
    return (
        <AppLayout category="Register" menu="Certificate" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Register Certificate" }</span>
                <ImageUploader></ImageUploader>
            </div>
        </AppLayout>
    )
}