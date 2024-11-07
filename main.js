// async function main() {
//    try {
//       const response = fetch("https://jsonplaceho.typicode.com/posts");
//       const data = response.json();
//    } catch (err) {
//       return null;
//    }
//
//    console.log(data);
// }
//
// main();

// Promises

const makeRequest = () => {
   return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((data) => resolve(data))
         .catch((err) => reject(err));
   });
};

setTimeout(() => {
   console.log("line 1");
}, 1000);
setTimeout(() => {
   console.log("line 2");
}, 2000);
fetch("https://jsonplaceholder.typicode.com/posts")
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((err) => console.log(err))
   .finally(() => console.log("line 3"));
