import styles from "./ImageUploader.module.css";
import IconImageSelector from "../../public/assets/icon-image-selector.svg";

export default function ()
{

    return (
        <div className={ styles.container }>
            <div className={styles.description }>
                <span className={ styles.title }>{ "Company Profile" }</span>
                <span className={ styles.subTitle }>{ "Click upload Logo, allowed file types: png, jpg, jpeg." }</span>
            </div>

            <div className={ styles.selector }>
                <IconImageSelector/>
            </div>
        </div>
    )
}