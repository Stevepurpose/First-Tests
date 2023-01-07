const{Certainfunc}=require("./exception.js")

test("expect to throw an error",()=>{
    expect(()=>Certainfunc()).toThrow()

})