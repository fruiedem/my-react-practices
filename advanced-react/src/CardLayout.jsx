import styles from './Card.module.css';
// arrow function 컴포넌트
const CardLayout = ({title, children}) => {

    return(
        <div className={styles.card}>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
export default CardLayout