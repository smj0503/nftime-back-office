import styles from "./ActionButton.module.css";

export default function ({ onClick, width, children, type = 'button' })
{

    return (
        <button type={ type } onClick={ onClick } style={{ width: width }} className={ styles.button }>
            <span className={ styles.title }>{ children }</span>
        </button>
    )
}