const name='John',message='good morning';
//const greeting=message+' '+ name +'!';
//const greeting=`${message}${name}!`;
const greeting=`${message}


${name}!`;//spaces given will be preserved
console.log(greeting);
const john={
    name:'John',
    email:'john@gmail.com',
    age:32
};
/*const strTr='<tr>'+
'<td>'+john.name+'</td>'+
'<td>'+john.email+'</td>'+
'<td>'+john.age+'</td>'+
'</tr>';
same thing we can do much more easily by different method
*/
const strTr=`
<tr>
<td>${john.name}</td>
<td>${john.email}</td>
<td>${john.age}</td>
</tr>
`;
console.log(strTr);//now we can insert by inner HTML
