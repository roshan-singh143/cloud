// // // // // let a="hello world";
// // // // // console.log(a);
// // // // // // console.log(a.length);
// // // // // template literal----->
// // // // // let a =`hello world`;
// // // // // console.log(a);
// // // // // let obj={
// // // // //     fname:"roshan",
// // // // //     age:20,
// // // // // }
// // // // // console.log("my name is ", obj.fname,"age is",obj.age);
// // // // // let print=`my name is ${obj.fname} &  age is ${obj.age}`;
// // // // // console.log(print);
// // // // // console.log(`sum of three num is ${1+2+3}`);
// // // // // console.log("hello\nworld");
// // // // // console.log("hello\tworld");
// // // // // let a="hello world";
// // // // // let b=a.toUpperCase();
// // // // // console.log(b);
// // // // // include-------->>>>>>
// // // // // let a="roshan singh";
// // // // // console.log(a.includes(""));
// // // // let a="roshan singh";
// // // // console.log(a.startsWith("roshan"));



// // // // array-------->>>>>>>>>>>>


// // // // let a=[12,10,56,87,48,95];
// // // // console.log(a);
// // // // console.log(a.length);
// // // // let b=[`roshan`,`raghu`,`satya`,`nanu`,`piku`];
// // // // console.log(b[2]=`rahul`);
// // // // console.log(b);


// // // //for loop---->>>
// // // // for( i=1;i<b.lenth;i++){
// // // //     console.log(b[i]);
// // // // }
// // // //for in----->>>>>
// // // // for( let i of b){
// // // //     console.log(i);
// // // // }
// // // // for(let i in b){
// // // //     console.log(i);
// // // // }
// // // //multi-dimension array
// // // let arr1=[
// // //     [`raja`,`pankaj`,45,69],
// // //     [`roshan`,`roki`,12,20],
// // //     [`saroj`,`chandan`,45,65],
// // //     [`addi`,`soumya`,78,98],
// // // ];
// // // console.log(arr1.join());
// // // // for(let i in arr){
// // // //     for(let j in arr[i]){
// // // //         console.log(arr[i][j]);
// // // //     }
// // // // }
// // // // for(let i=0;i<4;i++){
// // // //     for(let j=0;j<4;j++){
// // // //         console.log(arr[i][j]);
// // // //     }
// // // //     console.log("complete")
// // // // }
// // // // let arr=[1,2,5,5,6,9,8,];
// // // // delete arr[2];
// // // // console.log(arr);

// // // //sort

// // // let arr=[`richard`,`dilip`,`kumar`,458];
// // // console.log(arr.sort());

// // // //push

// // // let arr2=[1,2,3,4];
// // // arr2.push(6,5,8,9,7,1);
// // // console.log(arr2);

// // // //reverse
// // // let arr3=[7,8,9,4,5,6,1];
// // // console.log(arr3.reverse());

// // // //pop

// // // var a=[1,2,3,4,5,6,7];
// // // a.pop();
// // // console.log(a);

// // // //unshiftonsole.log(s("introduction ALGOR"));

// // // var b=[2,3,4,5];
// // // b.unshift(1);
// // // console.log(b);

// // // //shift
// // // var c =[1,2,3,4,5,6];
// // // c.shift();
// // // console.log(c);

// // // //concat

// // // let v=[1,2,3,4];
// // // let l=[7,8,9,5];
// // // let r=v.concat(1);
// // // console.log(r);


// // // //join

// // // const z=[[1,2],
// // // [3,4],
// // // [5,6],
// // // ];
// // // console.log(z.join ());


// // // let a=[92,36,44,71,88,55,4];
// // // let sum=0;
// // // for(let i in a){
// // //     sum=sum+a[i];
// // //     avg=a[i]*10/100;
// // //     a[i]=a[i]-avg;
// // // }
// // // console.log("average is=",sum/a.length);
// // // console.log(a);

// // // let a = [331, 245, 900, 50, 478, 777, 666];
// // // for (let i in a) {
// // //     let dis = a[i] * 20 / 100;
// // //     a[i] = a[i] - dis;
// // // }
// // // console.log(a);


// // // Function


// // // function myfun(a="roshan"){
// // //     console.log(a);
// // // }
// // // myfun();
// //  function myfun(a,b){
// //     c=a+b;
// //     return c;
    
// //  }
// //  myfun(3,6);
// //  console.log(c);



// //  ARROW Function
//    //  let t=(a,b)=>{
//    //     c=a+b;
//    //     return c;
//    //  };
//    //  t(2,4);
//    //  console.log(c);

    
// // ARROW Function
// //    let s=(str)=>{
// //       let r=['a','e','i','o','u','A','E','I','O','U'];
// //       let count=0;
// //       for(let i in str){
// //          for(let j in r){
// //             if(str[i]==r[j]){
// //             count++;
// //             }
// //          }
// //    }
// //    return count;
// // }

// // c
    
//    // const r=(str)=>{
//    //     res=0;
//    //    for(let i of str){
//    //       if(i==="a"|| i==="e"|| i==="i"|| i==="o"|| i==="u"){
//    //          res++
//    //       }
      
//    //    }
//    //    return res;
//    //  };
//    //  r("roshan singh");
//    //  console.log(res);
// // let arr=[1,2,3];
// // arr.forEach(function val(val){
// //    console.log(val);
// // });


// // let arr=[1,2,3];
// // arr.forEach((val)=>{
// //    console.log(val)
// // });
// // let a=[1,2,3,4];
// // a.forEach((val)=>{
// // console.log(val * val); 
// // })


// // higher order method

// // let arr=["raghab","raja",];
// // arr.forEach((val,index,arr)=>{
// //    console.log(val,index,arr);
// // });
// // program to generate fibonacci series up to n terms

// // take input from the user



// // fibonacci series


// // const number = parseInt(prompt('Enter the number of terms: '));
// // let n1 = 0, n2 = 1, nextTerm;

// // console.log('Fibonacci Series:');

// // for (let i = 1; i <= number; i++) {
// //     console.log(n1);
// //     nextTerm = n1 + n2;
// //     n1 = n2;
// //     n2 = nextTerm;
// // } 


// // map() method
// // let arr=[2,3,4,5,11,6,7,8,9]
// // arr.map((val)=>{
// //    console.log(val);
// // });

// // let result=arr.map((val)=>{
// //    return val +val;
// // });

// // console.log(result);

// // let arr=[1,2,3,4,]
// // let sum=0;
// // arr.map((val)=>{
// //    console.log(val);
// // });
// // let res=arr.map((val)=>{
// //    sum=val*val;
// //    return sum;

// // });
// // console.log(res);

// //filter method 

// // let arr=[1,2,3,4,5,6]
// // let res=arr.filter((val)=>{
// //    return val%2===0;
// // });
// // console.log(res);

// //REDUCE

// let arr=[1,2,3,4,5,6,7]
// const res=arr.reduce((val,curr)=>{  //val=accumulator  curr=current value
//    return val+curr;
// });
// console.log(res);

// LARGEST NUM AMONG THE ARRAY

// let arr=[12,43,54,234,76,87]
// const res=arr.reduce((prev,curr)=>{
//    return prev>curr?prev:curr;
// });
// console.log(res);

// let arr=[44,66,88,98,90,97,95,55,88]
// let res=arr.filter ((arr)=>{
//    return arr>90;
// });
// console.log(res);



// PRIME Number


// let arr = [55,44,6,6,61,67,,78,91,54,7,89,31,1,29,23,4,5,6,8,9,0];
// let isPrime = arr.filter((val) => {
//   for (let i = 2; i < val; i++) {
//     if (val % i === 0){ 
//       return false;
//   }
//   return true;
// }

// });


// console.log(isPrime);


// factorial of a num





// swaping the num



// let a=10;
// let b=20;
// console.log("before swapping the num",a,b);
//    a=a+b;
//    b=a-b;
//    a=a-b;
//    console.log("after swapping the num",a,b);

