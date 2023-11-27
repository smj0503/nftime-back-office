import styles from "./IssueContainer.module.css";
import IconPlus from "../../public/assets/icon-plus-16.svg";
import IconMinus from "../../public/assets/icon-minus-16.svg";

export default function ()
{
    const onChangeName = () =>
    {

    };

    return (
        <div className={ styles.container }>
            <div className={ styles.item }>
                <label className={ styles.label }>{ "Choose Certificate" }</label>
                <input className={ styles.input } onChange={ onChangeName }/>
            </div>

            <div className={ styles.controller }>
                <div className={ styles.item }>
                    <label className={ styles.label }>{ "Receiver" }</label>
                    <input className={ styles.receiver } onChange={ onChangeName }/>
                </div>
                <div className={ styles.item }>
                    <label className={ styles.label }>{ "Receiver Wallet Address" }</label>
                    <input className={ styles.address } onChange={ onChangeName }/>
                </div>
                <div className={ styles.buttonGroup }>
                    <button className={ styles.roundButton }><IconPlus/></button>
                    <button className={ styles.roundButton } disabled={true}><IconMinus/></button>
                </div>
            </div>

            <div className={ styles.empty }>
                <div className={ styles.receiver } data-empty={true}/>
                <div className={ styles.address } data-empty={true}/>
            </div>
        </div>
    );
}