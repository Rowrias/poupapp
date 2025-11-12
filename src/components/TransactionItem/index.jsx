import styles from './transactionitem.module.css'

export const TransactionItem = ({ item }) => {
    return (
        <div className={styles}>
            <div>
                <p>{item.description}</p>
                <p>{item.value}</p>
            </div>
            <div>
                {item.date}
            </div>
        </div>
    )
}
