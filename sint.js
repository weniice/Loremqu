const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 1500);
});

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // This will log 'Promise 1 resolved' since it resolved first
  })
  .catch((reasons) => {
    console.error(reasons); // This will not be called in this example
  });
