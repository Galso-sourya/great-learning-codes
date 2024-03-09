import TableBasic from './components/TableBasic';
import columns from './columns';
import { useMemo } from 'react';
import shows from './shows';
const App=()=>{
    const columnsConfig=useMemo(()=>columns,[]);//not necessary to use useMemo but it tells that the 
    //information will not change
    const data=useMemo(()=>shows,[]);
    return <TableBasic columns={columnsConfig} data={data}/>
};
export default <App/>;
//first we need configuration for the column