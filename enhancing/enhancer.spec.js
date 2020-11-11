const enhancer = require('./enhancer.js');
const {repair,success,fail,get }= require('./enhancer.js');

// test away!
describe("Test enhancer", () => {

  it("sanity check", () => {
    expect(enhancer).toBeDefined()
  });

  it("Repair Item", () => {
    const broken = {item:"Steve's Heart", durability:69, enhancement:2}
    const fixed = repair(broken)
    expect(repair).toBeDefined()
    expect(fixed).toBeInstanceOf(Object)
    expect(fixed).toHaveProperty("durability")
    expect(fixed).toHaveProperty("item")
    expect(fixed).toHaveProperty("enhancement")
    expect(fixed.item).toEqual(broken.item) 
    expect(fixed.enhancement).toEqual(broken.enhancement)
    expect(fixed.durability).toEqual(100)
  });

  it("Success Item", () => {
    expect(success).toBeDefined()
    const broken = {item:"Steve's Heart", durability:69, enhancement:2}
    const succeed = success(broken)
    expect(success).toBeDefined()
    expect(succeed).toBeInstanceOf(Object)
    expect(succeed).toHaveProperty("durability")
    expect(succeed).toHaveProperty("item")
    expect(succeed).toHaveProperty("enhancement")
    expect(succeed.item).toEqual(broken.item) 
    expect(succeed.durability).toEqual(broken.durability)
    expect(succeed.enhancement).toBeLessThanOrEqual(20)
    expect(succeed.enhancement).toBeGreaterThanOrEqual(broken.enhancement)
    });

  it("Fail Item for enhancement < 15", () => {
    expect(fail).toBeDefined()
    const broken = {item:"Steve's Heart", durability:69, enhancement:2}
    const failed = fail(broken)
    expect(failed).toBeDefined()
    expect(failed).toBeInstanceOf(Object)
    expect(failed).toHaveProperty("durability")
    expect(failed).toHaveProperty("item")
    expect(failed).toHaveProperty("enhancement")
    expect(failed.item).toEqual(broken.item) 
    expect(failed.durability).toBeLessThanOrEqual(broken.durability)
    expect(failed.enhancement).toBeLessThan(15)
    expect(failed.enhancement).toEqual(broken.enhancement)
  });

  it("Fail Item for enhancement = 15", () => {
    expect(fail).toBeDefined()
    const broken = {item:"Steve's Heart", durability:69, enhancement:15}
    const failed = fail(broken)
    expect(failed).toBeDefined()
    expect(failed).toBeInstanceOf(Object)
    expect(failed).toHaveProperty("durability")
    expect(failed).toHaveProperty("item")
    expect(failed).toHaveProperty("enhancement")
    expect(failed.item).toEqual(broken.item) 
    expect(failed.durability).toBeGreaterThanOrEqual(broken.durability)
    expect(failed.enhancement).toEqual(15)
    expect(failed.enhancement).toEqual(broken.enhancement)
  }); 
   it("Fail Item for enhancement > 15", () => {
    expect(fail).toBeDefined()
    const broken = {item:"Steve's Heart", durability:69, enhancement:18}
    const failed = fail(broken)
    expect(failed).toBeDefined()
    expect(failed).toBeInstanceOf(Object)
    expect(failed).toHaveProperty("durability")
    expect(failed).toHaveProperty("item")
    expect(failed).toHaveProperty("enhancement")
    expect(failed.item).toEqual(broken.item) 
    expect(failed.durability).toBeGreaterThanOrEqual(broken.durability)
    expect(failed.enhancement).toBeGreaterThan(15)
    expect(failed.enhancement).toBeLessThan(broken.enhancement)
  });



  it("Get Item", () => {
    expect(get).toBeDefined()
  });
  
});


  // expect(5).toBeTruthy();
    // expect([]).toBeTruthy();
    // expect(5).toBeLessThan(6);
    // expect(5).toBeGreaterThan(4);
    // expect(0).not.toBeTruthy();
    // expect(undefined).not.toBeDefined();
    // expect(null).toBeNull();
    // expect({}).toEqual({});
    // expect([1]).toEqual([1]);