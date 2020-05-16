// let val;

// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });



// console.log(val);

//document.getElementById()

// console.log(document.getElementById('task-title'))

//get things from the element

// console.log(document.getElementById("task-title").id);

// console.log(document.getElementById("task-title").className);

//change styling
// document.getElementById("task-title").style.background = "black";
// document.getElementById("task-title").style.color = "white";
// document.getElementById("task-title").style.padding = "5px";

//change content
// document.getElementById("task-title").textContent = "Task List";
// document.getElementById("task-title").innerText = "My Tasks";
// document.getElementById("task-title").innerHTML = "<span style ='color:red'>Task List</span>";

//shouldn't copy and paste.  Change the repeating text into variable

// const taskTitle = document.getElementById("task-title");

// taskTitle.textContent = "My Tasks";
// taskTitle.innerText = "My TAsks";
//you get the idea

//document.querySelector() - we an select anything with this and very powerful

// console.log(document.querySelector("#task-title"));

// document.querySelector("li").style.color = "red"; //single element selector, and it only selects the first one

// document.querySelector("ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "blue";

// document.querySelector("li:nth-child(3)").style.color = "green";

// document.querySelector("li:nth-child(4)").textContent = "Hello World";

//document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");

// console.log(items);

// console.log(items[0]);

// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

// console.log(listItems)


