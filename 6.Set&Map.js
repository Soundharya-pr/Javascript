//SET
setExample = new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
console.log(setExample)

for(const value of setExample){
    console.log(value)
}
//NO OUTPUT --> for in loop
for(key in setExample){
    console.log(key)
}

//MAP

mapEg = new Map([
    ["id","21ECR199"] ,["name","Sound"] //To insert many key value pairs we put double sqaure bracket to distinguish
])
console.log(mapEg)
mapEg.set("age",20)
mapEg.set("number","9047440900")
console.log(mapEg)
mapEg.delete("age",20)
console.log(mapEg)

for(const value of mapEg){
    console.log(value)
}
//NO OUTPUT --> for in loop
for(const value in mapEg){
    console.log(value)
}
console.log(mapEg.has("name")) //if key is present returns true*/