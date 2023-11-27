import styles from "./CompanyRegisterContainer.module.css";

export default function ({ setName, setDescription, setUrl })
{
    const onChangeName = (e) =>
    {
        setName(e.target.value);
    };

    const onChangeDescription = (e) =>
    {
        setDescription(e.target.value);
    };

    const onChangeUrl = (e) =>
    {
        setUrl(e.target.value);
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.item }>
                <span className={ styles.title }>{ "Company name" }</span>
                <input type="text" className={ styles.input } onChange={ onChangeName }/>
            </div>
            <div className={ styles.item }>
                <span className={ styles.title }>{ "Company Description" }</span>
                <input type="text" className={ styles.input } data-long={true} onChange={ onChangeDescription }/>
            </div>
            <div className={ styles.item }>
                <span className={ styles.title }>{ "Company Website" }</span>
                <input type="text" className={ styles.input } onChange={ onChangeUrl }/>
            </div>
        </div>
    )
}