import CompanyItem from "@/components/CompanyItem";

import styles from "./CompanyTable.module.css";

export default function ({ companyList })
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
            {
                companyList.length > 0 && (
                    companyList.map((company, index) =>
                    {
                        return (
                            <CompanyItem
                                key={ index }
                                // image={ company.CompanyImage }
                                name={ company.CompanyName }
                                description={ company.CompanyDescription }
                                certificateNum={ company.certificate_register_count}
                                issueNum={ company.certificate_issue_count }
                                date={ company.company_register_date }
                            />
                        )
                    })
                )
            }
        </div>
    )
}