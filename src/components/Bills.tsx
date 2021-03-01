import styles from '../styles/components/Bills.module.css'

interface BillsProps {
    description: string;
    paid: Date;
    dueDate: string;
    amount: string;
}

export default function Bills(props : BillsProps) {
  return (
    <>
      <div className={styles.bills}>
        <div className={styles.bill}>
          <div className={styles.billHeader}>
            <label className={styles.description}>{props.description}</label>
            {/* <input className="paid" type="checkbox"></input> */}
            <label></label>
          </div>

          <div className={styles.billHeader}>
            <label className={styles.dueDate}>{props.dueDate}</label>
            <label className={styles.amount}>{props.amount}</label>
          </div>
        </div>
      </div>
    </>
  );
}
