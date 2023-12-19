import { useEffect } from "react";

import styles from "./Toast.module.css";
import IconCheck from "../../public/assets/icon-check.svg";
import IconWarning from "../../public/assets/icon-warning.svg";

export default function ({ state, onClick, close, message, show, type })
{
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
                                <span className={ styles.state }>{ "Success" }</span>
                                <span className={ styles.confirm }>{ message }</span>
                            </>
                        ) : (
                            <>
                                <span className={ styles.state }>{ "Failed" }</span>
                                <span className={ styles.confirm }>{ `Please try to ${type} again` }</span>
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
                                        <label>{ "Cancel" }</label>
                                    </button>
                                    <button type="button" className={styles.button } onClick={ onClick }>
                                        <label>{ "Yes" }</label>
                                    </button>
                                </>
                            ) : (
                                <button type="button" className={styles.button } onClick={ onClick }>
                                    <label>{ "OK" }</label>
                                </button>
                            )
                        }
                    </div>
                ) : (
                    <div className={ styles.buttonGroup }>
                        <button type="button" className={styles.button } onClick={ close }>
                            <label>{ "Retry" }</label>
                        </button>
                    </div>
                )
            }
        </div>
    )
}
