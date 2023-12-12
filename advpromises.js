"use strict";

let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  // begin
  console.log(`${thisPromiseCount}) Started`)
  // We make a new promise: we promise a numeric count of this promise,
  // starting from 1 (after waiting 3s)
  const p1 = new Promise((resolve, reject) => {
    // The executor function is called with the ability
    // to resolve or reject the promise
   
  console.log(`${thisPromiseCount}) Promise constructor`)

    // This is only an example to create asynchronism
    setTimeout(
      () => {
        // We fulfill the promise
        resolve(thisPromiseCount);
      },
      Math.random() * 2000 + 1000,
    );
  });

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then((val) => {
    // Log the fulfillment value
  console.log(`${val}) Promise fulfilled`)

  }).catch((reason) => {
    // Log the rejection reason
    console.log(`Handle rejected promise (${reason}) here.`);
  });
  // end

  console.log(`extra works `, 2+3+5)

}

testPromise()
