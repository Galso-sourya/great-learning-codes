import { ReactNode } from 'react';
import './Dialog.css';
type Props={
    children:ReactNode,
    show:boolean
};
const Dialog=(props:Props)=>{
   // const{text,show}=props;//we destructure just to access individual values
   const{children,show}=props;
    return(
        <>
        {
            //show && (
        <div className="dialog-overlay">
            <div className="dialog">{children}
                {/*{text}*/}
                </div>
        </div>
            //)
}
        </>
    );
}
export default Dialog;