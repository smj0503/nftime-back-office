import { useState } from "react";
import { asyncEffect } from "@/common/utils";

import { getStatistics, getCompanyList } from "@/apis/dashboard.api";

import AppLayout from "@/components/AppLayout";
import StatusBox from "@/components/StatusBox";
import CompanyTable from "@/components/CompanyTable";

import styles from "../../styles/Dashboards.module.css";
import IconCompany from "../../public/assets/icon-company-28.svg";
import IconCertificate from "../../public/assets/icon-certifiacte-28.svg";
import IconIssue from "../../public/assets/icon-issue-28.svg";

export default function ()
{
    const [statistics, setStatistics] = useState();
    const [companyList, setCompanyList] = useState([]);

    // asyncEffect(async () =>
    // {
    //     const { statistics } = await getStatistics();
    //
    //     console.log('result : ', statistics);
    // });

    return (
        <AppLayout category="Dashboards" menu="Company list" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Company list" }</span>
                <div className={ styles.statusContainer }>
                    {
                        statistics && (
                            <>
                                <StatusBox icon={ <IconCompany/> } count={ statistics.registered_company_cnt } color={ "rgba(0, 158, 208, 0.10)" }>{ "Registered Company" }</StatusBox>
                                <StatusBox icon={ <IconCertificate/> } count={ statistics.registered_certificate_cnt } color={ "rgba(48, 255, 205, 0.10)" }>{ "Registered Certificate" }</StatusBox>
                                <StatusBox icon={ <IconIssue/> } count={ statistics.issued_certificate_cnt } color={ "rgba(42, 208, 0, 0.10)" }>{ "Issued Certificate" }</StatusBox>
                            </>
                        )
                    }
                </div>
                <CompanyTable companyList={ companyList }/>
            </div>
        </AppLayout>
    )
}