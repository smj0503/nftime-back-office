import styles from "./Toast.module.css";
import IconCheck from "../../public/assets/icon-check.svg";
import IconWarning from "../../public/assets/icon-warning.svg";

export default function ({ state, onClick })
{
    return (
        <div className={ styles.toast }>
            <div className={ styles.notion }>
                {
                    state === "success" ? <IconCheck/> : <IconWarning/>
                }
                <div className={ styles.message }>
                    {
                        state === "success" ? (
                            <>
                                <span className={ styles.state }>{ "Success" }</span>
                                <span className={ styles.confirm }>{ "Are you sure you want to register your certificate?" }</span>
                            </>
                        ) : (
                            <>
                                <span className={ styles.state }>{ "Failed" }</span>
                                <span className={ styles.confirm }>{ "Please try to register again" }</span>
                            </>
                        )
                    }
                </div>
                <button type="button"></button>
            </div>
        </div>
    )
}