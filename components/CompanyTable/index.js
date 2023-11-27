import CompanyItem from "@/components/CompanyItem";

import styles from "./CompanyTable.module.css";

export default function ()
{
    return (
        <div className={ styles.table }>
            <div className={ styles.columns }>
                <div className={ styles.name }>
                    <label>{ "Company" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Certificate" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Issue" }</label>
                </div>
                <div className={ styles.data }>
                    <label>{ "Date" }</label>
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