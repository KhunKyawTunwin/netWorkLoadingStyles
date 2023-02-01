// // let arRays = [
// //    {
// //       title: "mrkhun",
// //       dueDate: "2022-6-7",
// //    },
// //    { title: "education", dueDate: "2020-5-6" },
// //    { title: "Make Dinner", dueDate: "2021-2-25" },
// // ];

// // render();

// // function workFlow() {
// //    let textbox = document.getElementById("todo-title");
// //    let title = textbox.value;
// //    const datePicker = document.getElementById("date-picker");
// //    const dueDate = datePicker.value;
// //    arRays.push({ title: title, dueDate: dueDate });
// //    render();
// // }

// // function render() {
// //    document.getElementById("todo-list").innerHTML = "";
// //    arRays.forEach(function (indexTitle) {
// //       let newDiv = document.createElement("div");
// //       newDiv.textContent = indexTitle.title + " " + indexTitle.dueDate;
// //       let todoList = document.getElementById("todo-list");
// //       todoList.appendChild(newDiv);
// //    });
// // }

// // class Car {
// //    color = "red";
// //    wheel = "4";
// //    drive() {
// //       console.log("this is our Car Group");
// //    }
// // }

// let Cars = {
//    colors: "blue",
//    wheels: "4wheels",
// };
// let cars = new Cars();

// let a = {};
// a.name = "mrKhun";
// a.age = 30;
// a.education = "Graduated";

// console.log(a);

let posts = [
   {
      title: "Title One",
      body: "This is body",
   },
   {
      title: "Title two",
      body: "This is body2",
   },
];

// let getPost = function () {
//    console.log(posts);
// };

// let createPost = function (post, getData) {
//    posts.push(post);
//    getData();
// };
// createPost({ Title: "Title 3", Body: "This is body 3" }, getPost);

//  Sir Code for letture

// createPost(post,getPost)

// let getPosts = () => {
//    console.log(posts);
// };

// let createPost = (post, getPosts) => {
//    posts.push(post);
//    getPosts();
// };

// createPost({ title: "Title 3", body: "This is body 3" }, getPosts);
// createPost({ title: "Title 4", body: "This is body 4" }, getPosts);

let createPost = () => console.log(posts);

let getPost = (post, newData, lastData, getData) => {
   setTimeout(() => {
      posts.push(post, newData, lastData);
      getData();
   }, 2000);
};
getPost(
   { Title: "Title 3", body: "This is body 3" },
   { Title: "Title 4", body: "This is body 4" },
   { Title: "Title 5", body: "This is body 5" },
   createPost
);
