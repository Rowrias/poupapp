import styles from './transactionitem.module.css'

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const TransactionItem = ({ item }) => {

    const detailAddicionalClassName = item.value >= 0 ? styles.income : styles.expense

    return (
        <div className={styles.transaction}>
            <div className={[styles.details, detailAddicionalClassName].join(' ')}>
                <p>{item.description}</p>
                <p>{formatter.format(item.value)}</p>
            </div>
            <div className={styles.date}>
                {new Date(item.date).toLocaleDateString('pt-BR')}
            </div>
        </div>
    )
}
