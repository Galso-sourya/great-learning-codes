import PaymentOptions from '../models/PaymentOptions';
import Dialog from './Dialog';
import './SuccessPaymentDialog.css';
type Props={
    modeOfPayment: PaymentOptions,
    closeConfirmationDialog: () => void
}
const SuccessPaymentDialog=(props:Props)=>{
    const {modeOfPayment,closeConfirmationDialog}=props;
    return(<Dialog show={true}>
        <div>successfully paid.....by {modeOfPayment}</div>
    <button className="btn btn-close" onClick={closeConfirmationDialog}>close</button>
    </Dialog>);
}
export default SuccessPaymentDialog;