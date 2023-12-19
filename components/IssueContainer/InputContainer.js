import styles from "./IssueContainer.module.css";

export default function ({ setCertificate, setReceiver, setAddress, setImage, certificateList })
{
    const onChangeCertificate = (e) =>
    {
        setCertificate(e.target.value);
        setImage("/assets/photo/photo-certificate-2.png");
    };

    const onChangeReceiver = (e) =>
    {
        setReceiver(e.target.value);
    };

    const onChangeAddress = (e) =>
    {
        setAddress(e.target.value);
    };

    console.log('list : ', certificateList);

    return (
        <div className={ styles.container }>
            <div className={ styles.item }>
                <label className={ styles.label }>{ "Choose Certificate" }</label>
                <select className={ styles.select } onChange={ onChangeCertificate }>
                    <option>{ "Select Certificate" }</option>
                    {
                        certificateList.map((certificate, index) => {
                            return <option key={ index }>{ certificate.certificate_name }</option>
                        })
                    }
                </select>
            </div>

            <div className={ styles.controller }>
                <div className={ styles.item }>
                    <label className={ styles.label }>{ "Receiver" }</label>
                    <input type="text" className={ styles.receiver } onChange={ onChangeReceiver }/>
                </div>
                <div className={ styles.item }>
                    <label className={ styles.label }>{ "Receiver Wallet Address" }</label>
                    <input type="text" className={ styles.address } onChange={ onChangeAddress }/>
                </div>
            </div>
        </div>
    );
}
