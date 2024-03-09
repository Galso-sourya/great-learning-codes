import React from 'react';
import {Column,useTable,useGlobalFilter} from 'react-table';
import './Table.css';
const TableWithSorting=({columns,data}:{columns:Column<Object>[],data:any})=>{
    const {
getTableProps,
getTableBodyProps,
headerGroups,
rows,
prepareRow,
//extra 2 things what they return
state,
setGlobalFilter
    }=
    useTable({
        columns,
        data
        },
        useGlobalFilter
        );

        return(
            <>
            {
                <input
                type="search"
                value={state.globalFilter}
                onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setGlobalFilter(event.target
                    .value)}
                />
            }
            <table {...getTableProps()}>
<thead>
  {
    headerGroups.map(headerGroup=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
{
    headerGroup.headers.map(header=>(
        <th {...header.getHeaderProps(column.getSortByToggleProps())}>
{column.render('Header')}
<span>
{
        column.isSorted?(
            column.isSortedDesc?(
                <span>&darr;</span>
            ):(
<span>&uarr;</span>)
        ):(
            <span>

            </span>
        )
}
</span>
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
            </table></>
        )
};



export default TableBasic;