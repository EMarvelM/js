import { describe, it } from "node:test";
import assert from "node:assert";

export function order(words:string):string{
    return ''
}




describe("solution", function(){
  it("basicTests", function(){
    assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    assert.equal(order(""), "");
  });
});