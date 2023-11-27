import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";

import styles from "../../styles/Register.module.css";

export default function ()
{
    return (
        <AppLayout category="Issue" menu="Certificate" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Issue Digital Certificate" }</span>
                <ImageUploader></ImageUploader>
            </div>
        </AppLayout>
    )
}