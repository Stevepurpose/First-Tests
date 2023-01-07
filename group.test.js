/*when running group tests we use one of the files as our entry point ,in this scenerio group.js. Then wrap our tests in
 describe*/



const k = require("./group.js")

describe("test batches",()=>{
    it("should output k as 3",()=>{
        const result=3
        expect(result).toBe(3)
    })
it("object stuff",()=>{
const obj={}
expect(obj).toEqual({})

})

})

//truthy or falsy
describe("truthy or falsy",()=>{
    test('null',()=>{
        const result=null
        expect(result).toBeFalsy()
    })

test('should first', () => { 
  const result=true
        expect(result).toBeTruthy()  
    })


 })

//intergers
 describe("numbers",()=>{
    it("two plus two",()=>{
    const value=2+2
    expect(value).toBe(4)
    expect(value).toBeGreaterThan(3)
    expect(value).toBeLessThan(7)

    })

    //floats
    it("should add decimals",()=>{
        const value=0.1+0.2
        expect(value).toBeCloseTo(0.2999999)
     })


 })


 describe('strings',()=>{
    test('should not include',()=>{
        expect("team").not.toMatch(/I/) //Use of regular expressions
    })
 })


 describe('arrays',()=>{
    test('array should include benz',()=>{
        const garage=['benz','ferrari','volvo','audi']
        expect(garage).toContain('ferrari')
    })
 })

