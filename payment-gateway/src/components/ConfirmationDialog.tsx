import { useState } from "react";
import Dialog from "./Dialog";
import SuccessPaymentDialog from "./SuccessPaymentDialog";
import PaymentOptions from "../models/PaymentOptions";
type Props={
    modeOfPayment:PaymentOptions,
    closeConfirmationDialog:()=>void
}
const ConfirmationDialog = (props:any) => {
    //const {show}=props;
    const {closeConfirmationDialog,modeOfPayment}=props;
    const [showSuccessDialog,setShowSuccessDialog]=useState(false);
    return ( 
            <>
            {
                showSuccessDialog===false && (
                //show===true && (
                    <Dialog show={true}>
                        <div style={{textAlign:'center'}}>are you sure?</div>
                    <button className="btn btn-cancel" onClick={closeConfirmationDialog}>no</button>
                    <button className="btn btn-confirm" onClick={()=>setShowSuccessDialog(true)}>yes</button>
                    </Dialog>
                )
                //)
            }
            {
                showSuccessDialog===true && (
<SuccessPaymentDialog modeOfPayment={modeOfPayment}
closeConfirmationDialog={closeConfirmationDialog}
/>
                )
            }
            </>
     );
}
 
export default ConfirmationDialog;