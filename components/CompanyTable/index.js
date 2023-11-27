import CompanyItem from "@/components/CompanyItem";

import styles from "./CompanyTable.module.css";

export default function ()
{
    return (
        <div className={ styles.table }>
            <div className={ styles.columns }>
                <div className={ styles.name }>
                    <span>{ "Company" }</span>
                </div>
                <div className={ styles.data }>
                    <span>{ "Certificate" }</span>
                </div>
                <div className={ styles.data }>
                    <span>{ "Issue" }</span>
                </div>
                <div className={ styles.data }>
                    <span>{ "Date" }</span>
                </div>
            </div>
            <CompanyItem/>
            <CompanyItem/>
            <CompanyItem/>
            <CompanyItem/>
            <CompanyItem/>
        </div>
    )
}