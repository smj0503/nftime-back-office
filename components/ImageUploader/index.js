import { useRef } from "react";

import styles from "./ImageUploader.module.css";
import IconImageSelector from "../../public/assets/icon-image-selector.svg";

export default function ({ children })
{
    const imageSelector = useRef();

    const _onClick = () =>
    {
        imageSelector.current.click();
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <span className={ styles.label }>{ children }</span>
                <span className={ styles.description }>{ "Click upload Logo, allowed file types: png, jpg, jpeg." }</span>
            </div>

            <div className={ styles.selector }>
                <input type="file" className={ styles.file } ref={ imageSelector }/>
                <button type="button" className={ styles.uploadButton } onClick={ _onClick }>
                    <IconImageSelector/>
                </button>
            </div>
        </div>
    )
}