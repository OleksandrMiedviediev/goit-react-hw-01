
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
  return (
      <table className={css.title}>
  <thead className={css.thead}>
    <tr>
      <th className={css.td}>Type</th>
      <th className={css.td}>Amount</th>
      <th className={css.td}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item => (
      <tr className={css.tr} key={item.id}>
        <td className={css.td}>{item.type}</td>
        <td className={css.td}>{item.amount}</td>
        <td className={css.td}>{item.currency}</td>
      </tr>
    )))}
  </tbody>
</table>
  ); 
}

 