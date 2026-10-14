import get from 'lodash.get';
import styles from './center.module.css';

const Center = (props) => {
    return (
        <div className={styles.outer}>
            <div className={styles.middle}>
                <div className={styles.inner} style={{width: get(props, 'width', '100%')}}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Center;