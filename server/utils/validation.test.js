const expect = require('expect');

const {isRealString}=require('./validation');


describe('isRealString', ()=>{
  it('should reject non-string values', ()=>{
    var res = isRealString(12);
    expect(res).toBe(false);
  });

  it('with only white spaces', ()=>{
    var res = isRealString('   ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', ()=>{
    var res = isRealString('  santhosh  ');
    expect(res).toBe(true);
  });

});
