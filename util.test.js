//use jest ,to install jest  npm install --save-dev  jest
const {detailer}=require('./util')

test('should output fname and lname',()=>{  ///if we were not using jest,test would be provided by test runner e.g mocha
const text=detailer('steve','Ross')
expect(text).toBe('steve Ross')    //toBe is a helper function  //if we were not using jest,expect is usually provided by
//the assertion library  e.g chai

})