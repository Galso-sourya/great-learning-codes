const columns=[
{
    Header:'Name',
    accessor:'name'//from where you need to pick up
},
{
    Header:'Language',
    accessor:'language'
},
{
    Header:'Genres',
    accessor:'genres',
    Cell:(props:any)=>props.value.join(',')
},
{
    Header:'Info',
    columns:[
        {
            Header:'Premiered',
            accessor:'premiered'
        },
        {
            Header:'Runtime(mins)',
            accessor:'runtime'
        },
        {
            Header:'Rating',
            accessor:'rating.average' //average property of rating  
        }
    ]
}
];
export default columns;