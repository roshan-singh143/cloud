/ // let b=document.getElementsByTagName("p");
// // // // // // // // // // console.log(b);

// // // // // // // // // // let c=document.querySelector("p");
// // // // // // // // // // console.log(c);
// // // // // // // // // // let a=document.querySelectorAll("p");
// // // // // // // // // // console.log(a);


// // // // // // // // // //properties of the document object model

// // // // // // // // // // let a=document.body.childNodes[3].tagName;
// // // // // // // // // // console.log(a);

// // // // // // // // // // let c=document.querySelector("p");
// // // // // // // // // // console.log(c);

// // // // // // // // // // let c=document.querySelectorAll("div");
// // // // // // // // // // console.log(c);


// // // // // // // // // // let a=document.querySelector("h2");
// // // // // // // // // // console.log(a);
// // // // // // // // // // let b=a.innerText+",i am from daringhabadi";
// // // // // // // // // // console.log(b);

// // // // // // // // // let a=document.querySelector(".ibmt");
// // // // // // // // // console.log(a);
// // // // // // // // // let q=a.innerHTML+"Roshan singh";
// // // // // // // // // console.log(q);
// // // // // // // // // let b=document.querySelector("div2");
// // // // // // // // // console.log(b);
// // // // // // // // // let v=b.innerHTML+"Daringhabadi";
// // // // // // // // // console.log(v);
// // // // // // // // // let c=document.querySelector("div3");
// // // // // // // // // console.log(c);
// // // // // // // // // let w=c.innerHTML+"Kandhamal";
// // // // // // // // // console.log(w);


// // // // // // // // let a=document.querySelectorAll(".ibmt");
// // // // // // // // console.log(a);
// // // // // // // // let b=1;
// // // // // // // // for(i of a ){
// // // // // // // //     i.innertext=`roshan singh ${b}`
// // // // // // // //     b++;

// // // // // // // // }

// // // // // // // // let element=document.querySelector("div");
// // // // // // // // console.log(element);
// // // // // // // // let elId=element.getAttribute("id");
// // // // // // // // console.log(elId);

// // // // // // // // let element=document.querySelectorAll("div");
// // // // // // // // console.log(element);
// // // // // // // // let elcl=element.getAttribute("class");
// // // // // // // // console.log(elcl);


// // // // // // // //set attributes--->>>

// // // // // // // // let element=document.querySelector("div");
// // // // // // // // console.log(element);
// // // // // // // // let elId=element.setAttribute("id","roshan");
// // // // // // // // let b =element.getAttribute("id");
// // // // // // // // console.log(b);


// // // // // // //node style---->>>>

// // // // // // // let a=document.querySelector("div");
// // // // // // // console.log(a);
// // // // // // // a.style.backgroundColor="red";
// // // // // // // a.style.color="white";
// // // // // // // a.style.fontSize="50";


// // // // // // //insert  element----->>>>>>(DOM)

// // // // // // let a=document.createElement("button");
// // // // // // a.innertext="click me";
// // // // // // console.log(a);

// // // // // // let ele=document.querySelector("div");
// // // // // // ele.append(a);

// // // // // // let a=document.querySelector("button");
// // // // // // console.log(a);
// // // // // // let b=document.querySelector("p");
// // // // // // console.log(b);
// // // // // // b.append(a);


// // // // // //synchronouse function

// // // // // console.log("hello");
// // // // // console.log("world");
// // // // // console.log("hyyyyy");


// // // // //Asynchronouse

// // // // function myfun(){
// // // //     console.log("Roshan singh");

// // // // }
// // // // setTimeout(myfun,4000);

// // // // //arrow

// // // // setTimeout(()=>{
// // // //     console.log("welcome to ibmt");
// // // // },3000);

// // // function myfun (a,b){
// // //     let c=a/b;
// // //     console.log(c);
// // // }
// // // function res(a,b,result){
// // //     result(a,b);
// // // }
// // // res(4,6,myfun);


// // let promise=new promise((resolve,reject)=>{
// //     console.log("i am promise");
// //     // resolve("i am promise");
// // });



// function getData(dataId,getNextData){
//     return new promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// let finalval=getNextData();
// console.log(finalval);

// async function roshan() {
//     console.log("roshan singh")

// }
// roshan();