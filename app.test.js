
const {sum}=require("./app.js")

test(' add 5 and 7 to equal 12',()=>{
const result=sum(5,7)
expect(result).toBe(12)

})