import { useState } from "react";
import ReactPaginate from "react-paginate";

import CompanyItem from "@/components/CompanyItem";

import styles from "./CompanyTable.module.css";

export default function ()
{
    const rows = [
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>,
        <CompanyItem/>
    ];

    const [pageCount, setPageCount] = useState(Math.ceil(rows.length / 5));

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

        </div>
    )
}