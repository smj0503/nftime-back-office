import RemoteImage from "@/components/RemoteImage";

import styles from "./CertificateItem.module.css";

export default function ()
{
    return (
        <div className={ styles.item }>
            <div className={ styles.info }>
                <RemoteImage src="" shape="certificate"/>
                <div className={ styles.text }>
                    <span>{ "Certificate name" }</span>
                    <span className={ styles.description }>{ "Certificate description" }</span>
                </div>
            </div>
            <div className={ styles.data }>
                <span>{ "Company name" }</span>
            </div>
            <div className={ styles.data }>
                <span>{ "Category" }</span>
            </div>
            <div className={ styles.data }>
                <span>{ "488" }</span>
            </div>
            <div className={ styles.data }>
                <span>{ "Feb 2, 2023" }</span>
            </div>
        </div>
    )
}