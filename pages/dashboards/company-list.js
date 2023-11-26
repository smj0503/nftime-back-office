import AppLayout from "@/components/AppLayout";

import styles from "../../styles/Homepage.module.css";

export default function ()
{
    return (
        <AppLayout category="Dashboards" menu="Company list" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Company list" }</span>
            </div>
        </AppLayout>
    )
}