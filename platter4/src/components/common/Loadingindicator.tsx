import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
type Props = {
};
const LoadingIndicator = ( props : Props ) => {
    return (
        <div className="d-flex flex-column align-items-center my-2">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">loading...</span>
            </Spinner>
            </div>
    );
};
export default LoadingIndicator;