import styles from './RemoteImage.module.css';

export default function ({ src, alt, shape })
{
    return (
        <div className={ styles.container } data-shape={ shape }>
            {
                src && <img src={ src } alt={ alt } className={ styles.img }/>
            }
        </div>
    )
}