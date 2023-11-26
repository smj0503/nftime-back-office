import styles from "./CompanyRegisterContainer.module.css";

export default function ()
{
    return (
        <div className={ styles.container }>
            <div className={ styles.item }>
                <span className={ styles.title }>{ "Company name" }</span>
                <input className={ styles.input }/>
            </div>
            <div className={ styles.item }>
                <span className={ styles.title }>{ "Company Description" }</span>
                <input className={ styles.input } data-long={true}/>
            </div>
            <div className={ styles.item }>
                <span className={ styles.title }>{ "Company Website" }</span>
                <input className={ styles.input }/>
            </div>
        </div>
    )
}