import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";

import styles from "./Toast.module.css";
import IconCheck from "../../public/assets/icon-check.svg";
import IconWarning from "../../public/assets/icon-warning.svg";

export default function ({ state, onClick, close, successMessage, failMessage, show, type })
{
    const { t } = useTranslation("common");

    // useEffect(() =>
    // {
    //     if(show)
    //     {
    //         setTimeout(() =>
    //         {
    //             close();
    //         }, 3000);
    //     }
    // }, [show]);

    return (
        <div className={ styles.toast } data-shown={ show }>
            <div className={ styles.notion }>
                {
                    state ? <IconCheck/> : <IconWarning/>
                }
                <div className={ styles.message }>
                    {
                        state ? (
                            <>
                                <span className={ styles.state }>{ t("toast.success") }</span>
                                <span className={ styles.confirm }>{ message }</span>
                            </>
                        ) : (
                            <>
                                <span className={ styles.state }>{ t("toast.failed") }</span>
                                <span className={ styles.confirm }>{ t("toast.tryAgain", { type: type }) }</span>
                            </>
                        )
                    }
                </div>
            </div>
            {
                state ? (
                    <div className={ styles.buttonGroup }>
                        {
                            type === "register" ? (
                                <>
                                    <button type="button" className={styles.button } data-color="white" onClick={ close }>
                                        <label>{ t("toast.cancel") }</label>
                                    </button>
                                    <button type="button" className={styles.button } onClick={ onClick }>
                                        <label>{ t("toast.yes") }</label>
                                    </button>
                                </>
                            ) : (
                                <button type="button" className={styles.button } onClick={ onClick }>
                                    <label>{ t("toast.ok") }</label>
                                </button>
                            )
                        }
                    </div>
                ) : (
                    <div className={ styles.buttonGroup }>
                        <button type="button" className={styles.button } onClick={ close }>
                            <label>{ t("toast.retry") }</label>
                        </button>
                    </div>
                )
            }
        </div>
    )
}
