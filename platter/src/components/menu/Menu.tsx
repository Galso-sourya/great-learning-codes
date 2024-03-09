import React,{useState,useEffect} from 'react';
import LoadingIndicator from '../common/LoadingIndicator';
import { getMenuForRestaurant } from '../../services/menu';
import IMenuItem from '../../models/IMenuItem';
import {Toast,ToastContainer,Row,Col} from 'react-bootstrap';
import imageUrls from '../../data/image-sources';
import {Link} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import AddMenuItem from '../add-menu-item/AddMenuItem';
type Props={
    id:number
};
const Menu=({id,match}:Props & RouteComponentProps)=>{
    const [loading,setLoading]=useState<boolean>(true);
    const [items,setItems]=useState<boolean>([]);
    const [error,setError]=useState<string>('');
    const [show,setShow]=useState<boolean>(false);
    useEffect(()=>{
const fetchMenu=async()=>{
    try{
const data=await getMenuForRestaurant(id);
setItems(data);
}catch(error){
    setError(error.response && error.response.data && error.response.data.message||error.message);
    setShow(true);
}finally{
    setLoading(false);
}
};
fetchMenu();
    },[]);
    return(
        <>
{
loading && (//if it is true, it will be shown
<LoadingIndicator
size="large"
message="wait......"
/>
)
}
{
    items && (
        <>
<div>
<h3>Menu</h3>
<Link to={`${match.url}/add`} className="btn btn-primary">add to menu</Link>
</div>
<hr/>

{
        items.map(
            ({id,restaurantId,name,price,description,imageUrl})=>(
<Row key={id}>
    <Col xs={6} lg={3}>
        <img src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
        alt={name}
        />
    </Col>
    <Col xs={6} lg={9}>
        <h5>{name}</h5>
        <div>{price}</div>
        <div>{description}</div>
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
        <ToastContainer
          className="p-3"
          position="top-end"
        >
          <Toast show={show}
          bg="danger"
          autohide
          delay={5000}
          onClose={()=>setShow(false)}
          >
            <Toast.Header closeButton={false}>Error
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
          </Toast>
        </ToastContainer>
    )
}
</>
    );
};
export default Menu;