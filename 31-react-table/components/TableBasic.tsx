import React from 'react';
import {Column,useTable} from 'react-table';
//you have to install react table by-
//npm i @types/react-table
//this should be typed in terminal
import './Table.css';
type Props={
columns:Column<object>[],//this is an array
data:any
};
/*define and export TableBasic component that accepts columns of type 
Column<object>[] and data*/
const TableBasic=({columns,data}:Props)=>{
    const {
getTableProps,
getTableBodyProps,
headerGroups,
rows,
prepareRow
    }=
    useTable({
        columns,
        data
        });//argument of useTable is an object
        return(
            <table {...getTableProps()}>
<thead>
  {
    headerGroups.map(headerGroup=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
{
    headerGroup.headers.map(header=>(
        <th {...header.getHeaderProps()}>
{header.render('Header')}
        </th>
    ))
}
        </tr>
    ))
  }  
</thead>
<tbody {...getTableBodyProps()}>
        {
            rows.map(row=>{
                prepareRow(row);
                return(
                <tr {...row.getRowProps()}>
{
    row.cells.map(
        cell=>(
            <td {...cell.getCellProps()}>
{cell.render('Cell')}
            </td>
        )
    )
}
                </tr>);
})
        }
    </tbody>
            </table>
        )
};



export default TableBasic;