/*for(let i=0;i<5;i++) // Local scope --> when you declare let i =0 , let holds accessiblity till the program ends
{                    // var hols accessiblity outside the block as well
    console.log(i+11)
}
console.log(i)*/

var a = 10 // Global Scope
console.log(a)
{
    let a= 5 // let --> o/p =10 5 10 var --> o/p =10 5 5
    console.log(a) //Block Scope
}
console.log(a)
