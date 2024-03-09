export default interface IRestaurant{
id:number,
name:string,
description:string,
cuisines:string[],
opens:string,
closes:string,
imageUrl:string,
rating:number,
costForTwo:number,
numRatings:number
};