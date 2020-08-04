/*
 * A promise takes a callback fn as an argument
 * callback fn has two args: resolve and reject
 * to either resolve or reject the promise respectively.
 * 
 * This snippet rejects a promise with "rejected with error" value 
 * after 2 seconds.
 */
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected with error"), 2000);
});

simplePromise
    .then(response => console.log(response))
    .catch(error => console.error(error));
