import styles from "./StatusBox.module.css";

export default function ({ children, icon, count, color })
{
    return (
        <div className={ styles.container } style={{ backgroundColor: color }}>
            <div>
                <span className={ styles.title }>{ children }</span>
                { icon }
            </div>
            <span className={ styles.count }>{ count }</span>
        </div>
    )
}