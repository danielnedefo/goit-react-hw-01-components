import User from './User/user.jsx'
import data from './User/user.json'
import statistic from './Statistic/statistical-data.json'
import Statistic from './Statistic/statistic.jsx'
import Friends from './Friends/friends.jsx'
import friend from './Friends/friends.json'
import Transactions from './Transaction/transactions.jsx'
import transaction from './Transaction/transaction.json'
import './App.css'
function App() {
  return (
    <>
      <User {...data} />
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          <Statistic arrayInfo={statistic} />
           </ul>
      </section>
      <section>
      <ul className="friend-list">
        <Friends friends={friend}/>
      </ul>
      </section>
      <table className="transaction-history">
        <thead className="table-head">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
          <Transactions transactions={transaction}/>
        </tbody> 
      </table>
      </>
  );
}

export default App;
