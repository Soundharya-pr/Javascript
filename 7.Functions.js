//Function without argument and return type
function func()
{
    console.log("Sample 1")
}
func()

//With argument and without return type
function funct(a,b){
    console.log("Sample 2")
    for(i=a;i<b;i++){
        if(i %2==0){
            console.log(i,"is a Even Number")
        }
        else{
            console.log(i, "is an Odd Number")
        }
    }
}
funct(5,10)

//With argument and return type
function fun(a,b){
    return a+b
}
console.log(fun(10,5))
