import useTranslation from "next-translate/useTranslation";

import CertificateItem from "@/components/CertificateItem";

import styles from "./CertificateTable.module.css";

export default function ({ certificateList })
{
    const { t } = useTranslation("common");

    return (
        <div className={ styles.table }>
            <div className={ styles.columns }>
                <div className={ styles.name }>
                    <label>{ t("dashboards.") }</label>
                </div>
                <div className={ styles.longData }>
                    <label>{ "Company" }</label>
                </div>
                <div className={ styles.longData }>
                    <label>{ "Category" }</label>
                </div>
                <div className={ styles.shortData }>
                    <label>{ "Issue" }</label>
                </div>
                <div className={ styles.date }>
                    <label>{ "Start Date" }</label>
                </div>
                <div className={ styles.date }>
                    <label>{ "End Date" }</label>
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
                                startDate={ certificate.certificate_start_date.substring(10, -1) }
                                endDate={ certificate.certificate_end_date.substring(10, -1) }
                            />
                        )
                    })
                )
            }
        </div>
    )
}
