import styles from "./ActionButton.module.css";

export default function ({ onClick, fill=false, children })
{

    return (
        <button onClick={ onClick } className={ styles.button } data-fill={ fill }>
            <span className={ styles.title }>{ children }</span>
        </button>
    )
}