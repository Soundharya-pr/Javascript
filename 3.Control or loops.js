for(var i=0;i<5;i++)
{
    console.log("This will be printed 5 times")

}
j=0
while(j < 5){
    console.log(j)
    j++
}

sum =0
k=0
do{
    sum =sum+ k;
    k++
}
while(k<7)
console.log(sum)

array = ["Hey" , 20 , "People"]
for(const index in array){
    console.log("The value present in ",index," is ",array[index])}

 for(const value of array){
    console.log(value)
 }   

 arr = [10 ,20,"Hello"]
arr.forEach(value => {
    console.log(value)
    
});


var FoodBill = {}
FoodBill["Item"] = "M - Biriyani"
FoodBill["Price"] = 200
FoodBill["Count"] = 2
FoodBill["Hotel"] = "Venu Biriyani"
console.log(FoodBill)
//for in --> Output = key
for(key in FoodBill){
    console.log(key,FoodBill[key])
}

//for each --> Output =
/*FoodBill.array.forEach((key ,element) => {
    console.log(key, element)
});*/
