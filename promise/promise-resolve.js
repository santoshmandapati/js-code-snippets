/*
 * A promise takes a callback fn as an argument
 * callback fn has two args: resolve and reject
 * to either resolve or reject the promise respectively.
 * 
 * This snippet resolves a promise with "basic" value 
 * after 2 seconds.
 */
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("basic"), 2000);
});

simplePromise
    .then(response => console.log(response))
    .catch(error => console.error(error));
