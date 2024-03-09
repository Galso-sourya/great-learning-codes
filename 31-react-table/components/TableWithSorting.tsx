import React from 'react';
import {Column,useTable,useSortBy} from 'react-table';
import './Table.css';
const TableWithSorting=({columns,data}:{columns:Column<Object>[],data:any})=>{
    const {
getTableProps,
getTableBodyProps,
headerGroups,
rows,
prepareRow
    }=
    useTable({//pass in useSortBy hook as second argument to useTable
        columns,
        data
        },
        useSortBy
        );
        return(
            <table {...getTableProps()}>
<thead>
  {
    headerGroups.map(headerGroup=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
{
    headerGroup.headers.map(header=>(
        //pass in column.getSortByToggleProps() to getHeaderProps
        //a file is required where all the custom hooks should be mentioned
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
            </table>
        )
};



export default TableBasic;