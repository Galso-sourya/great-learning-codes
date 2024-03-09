import { getTotalExpenseByPayee, getGrandTotal,getPendingAmount, getAllPayeeNames} from "../services/expense-utils";
import Table from 'react-bootstrap/Table';
const ExpenseSummary=({expenseItems})=>{
    const payeeName=getAllPayeeNames(expenseItems);
    function expenseSummaryTable() {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Payee</th>
                <th>total contributed amount</th>
                <th> pending Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                payeeNames.map((payeeName,index)=>{
                  return(
                    <tr>
                <td>{index+1}</td>
                <td>{payeeName}</td>
                <td>{getTotalExpenseByPayee(expenseItems,payeeName)}</td>
                <td>{getPendingAmount(expenseItems,payeeNames)}</td>
              </tr>
                  )
                })
              }
              <tr>
                <td></td>
                <td>grand total</td>
                <td>{getPendingAmount(expenseItems,payeeName)}</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        );
      }
return(
    <div>
        <h2>expense summary</h2>
        {
            expenseSummaryTable()
        }
    </div>
)
}
export {ExpenseSummary}