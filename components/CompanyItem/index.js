import RemoteImage from "@/components/RemoteImage";

import styles from "./CompanyItem.module.css";

export default function ({ image, name, description, certificateNum, issueNum, date})
{
    return (
        <div className={ styles.item }>
            <div className={ styles.info }>
                <RemoteImage src={ image } shape="company"/>
                <div className={ styles.text }>
                    <span>{ name }</span>
                    <span className={ styles.description }>{ description }</span>
                </div>
            </div>
            <div className={ styles.data }>
                <span>{ certificateNum }</span>
            </div>
            <div className={ styles.data }>
                <span>{ issueNum }</span>
            </div>
            <div className={ styles.data }>
                <span>{ date }</span>
            </div>
        </div>
    )
}