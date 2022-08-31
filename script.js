"use strict";
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("Promise was finished!");
  });

async function getPromise() {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Promise was finished!");
  }
}
getPromise();
