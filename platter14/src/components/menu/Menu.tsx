import React, { useState, useEffect } from 'react';
import IMenuItem from '../../models/IMenuItem';
import LoadingIndicator from '../common/Loadingindicator';
import { getMenuForRestaurant } from '../../services/Menu';
import { Col, Row, Toast, ToastContainer } from 'react-bootstrap';
type Props = {
    id: number
};

const Menu = ( { id } : Props) => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ items, setItems ] = useState<IMenuItem[]>( [] );
    const [ error, setError ] = useState<string>( '' );
    const [ show, setShow ] = useState<boolean>( false );
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const data = await getMenuForRestaurant( id );
                setItems( data );
            } finally {
                setLoading( false );
            }
        };

        fetchMenu();
    }, [ ]);
    return(
<>
            {
                loading && (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the menu for the restaurant. Please wait..."
                    />
                )
            }
            {
                items && (
                    <>
                        
                            <h3>Menu</h3>
                        
                        <hr />
                        {
                            items.map(
                                ( { id, restaurantId, name, price, description, imageUrl } ) => (
                                    <Row key={id} className="my-3">
                                        <Col xs={6} lg={3}>
                                            <img
                                                src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
                                                alt={name}
                                                className="w-100"
                                            />
                                        </Col>
                                        <Col xs={6} lg={9}>
                                            <h5>{name}</h5>
                                            <div className="my-2 text-sm">Rs. {price}</div>
                                            <div className="my-2 text-sm">{description}</div>
                                        </Col>
                                    </Row>
                                )
                            )
                        }
                    </>
                )
            }
            {
                error && (
                    <ToastContainer className="p-3" position="top-end">
                        <Toast
                            bg="danger"
                            show={show}
                            autohide
                            delay={5000}
                            onClose={() => setShow( false )}
                        >
                            <Toast.Header closeButton={false}>
                                Error
                            </Toast.Header>
                            <Toast.Body>{error}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                )
            }
            </>
    )
}
export default Menu;