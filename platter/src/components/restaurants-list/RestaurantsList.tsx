import React,{Component} from 'react';
import IRestaurant from '../../models/IRestaurant';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';
import {Row,Col,Alert} from 'react-bootstrap';
import RestaurantsListItem from './RestaurantsListItem';
import { getRestaurants } from '../../services/restaurants';
//type Props={
//}; if it is fetching the own data, we do not need to declare or need a prop
type State={
status:LoadingStatus,
restaurants?:IRestaurant[],
error?:Error
};
class RestaurantsList extends Component<Props,State>{
state:State={
    status:'LOADING'
};
render(){
    let el;
    const {status,restaurants,error}=this.state;
    switch(status){
case 'LOADING':
    el=(
<LoadingIndicator
size="large"
message="please wait"
/>
    );
    break;
    case 'LOADED':
    el=(
<Row xs={1} md={2} lg={3}>
{
    restaurants?.map(
        restaurant=>(
            <Col key={restaurant.id} className="d-flex align-items-stretch my-3">
                {/*between the columns, the space will be 3 */}
            <RestaurantsListItem
            restaurant={restaurant}
            />
            </Col>
        )
    )
}
</Row>
    );
    break;
    case 'ERROR_LOADING':
    el=(
<Alert variant="danger">
          {error?.message}
        </Alert>
    );
    break;
    }
    return el;
}
async componentDidMount() {
this.setState({
    status:'LOADING'
});
try{
const data=await getRestaurants();
this.setState({
    status:'LOADED'
    restaurants:data
});
}catch(error){
    this.setState({
        status:'ERROR_LOADING'
        error
    });
}
}
}
export default RestaurantsList;