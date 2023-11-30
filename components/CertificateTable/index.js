import CertificateItem from "@/components/CertificateItem";

import styles from "./CertificateTable.module.css";

export default function ({ certificateList })
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
            {
                certificateList.length > 0 && (
                    certificateList.map((certificate, index) =>
                    {
                        return (
                            <CertificateItem
                                key={ index }
                                image={ certificate.certificate_image }
                                name={ certificate.certificate_name }
                                description={ certificate.certificate_description }
                                companyName={ certificate.company_name }
                                category={ certificate.certificate_category }
                                issueNum={ certificate.issued }
                                date={ certificate.certificate_register_date }
                            />
                        )
                    })
                )
            }
        </div>
    )
}