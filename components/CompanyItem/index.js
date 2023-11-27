import RemoteImage from "@/components/RemoteImage";

import styles from "./CompanyItem.module.css";

export default function ()
{
    return (
        <div className={ styles.item }>
            <div className={ styles.info }>
                <RemoteImage src="" shape="company"/>
                <div className={ styles.text }>
                    <span>{ "Company name" }</span>
                    <span className={ styles.description }>{ "Company description" }</span>
                </div>
            </div>
            <div className={ styles.data }>
                <span>{ "3" }</span>
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