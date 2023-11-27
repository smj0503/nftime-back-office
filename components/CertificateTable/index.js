import CertificateItem from "@/components/CertificateItem";

import styles from "./CertificateTable.module.css";

export default function ()
{
    return (
        <div className={ styles.table }>
            <div className={ styles.columns }>
                <div className={ styles.name }>
                    <label>{ "Certificate" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Company" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Category" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Issue" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Date" }</label>
                </div>
            </div>
            <CertificateItem/>
            <CertificateItem/>
            <CertificateItem/>
            <CertificateItem/>
            <CertificateItem/>
        </div>
    )
}