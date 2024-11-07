// // // Asyncronous Programming
// // // try __ catch __ finally
// // // Promises
// //
// // // const button = document.querySelector("button");
// // //
// // // button.addEventListener("click", async () => {
// // //    console.log("Button Clicked");
// // //
// // //    try {
// // //       const response = await fetch(
// // //          "https://jsonplaceholder.typicode.com/posts"
// // //       );
// // //       const data = await response.json();
// // //       console.log(data);
// // //    } catch (error) {
// // //       alert(error);
// // //       console.log(error);
// // //    }
// // // });
// //
// // console.log("Hello");
// // let v = "value";
// //
// // console.log(v);
// //
// // // asyncronous programming
// // setTimeout(() => {
// //    console.log("Hello after 2 seconds");
// // }, 2000);
// // setInterval(() => {
// //    console.log("Hello after 1 seconds");
// // }, 1000);
// // // 1 seconds  = 1000 milliseconds
// // console.log("Hello after 0 seconds");
// //
// //
// //
//

// //
// // console.log("I wants to log first");
//
// // Create an array with 1000 elements
// const array = new Array(100000000).fill(0).map((_, index) => index);
//
// // Start timing
// console.time("LoopTime");
//
// // Loop through the array
// for (let i = 0; i < array.length; i++) {
//    // Do something with array[i]
// }
//
// // End timing
// console.timeEnd("LoopTime");

async function getPosts() {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await response.json();
   return data;
}
async function getUsers() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await response.json();
   return data;
}

async function main() {
   // console.time("main"); // this will start the timer - get current time 475747594574757
   // console.time("posts");
   const posts = await getPosts(); // line - 1 - task - 1 or function - 1
   // console.timeEnd("posts");
   // console.time("users");
   const users = await getUsers(); // line - 2 - task - 2 or function - 2
   // console.timeEnd("users");
   console.log(posts);
   console.log(users);
   // console.timeEnd("main"); // 1730960417768
}

main();
