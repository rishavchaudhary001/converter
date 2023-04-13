
// var firstName
// console.log(typeof(firstName))
// console.log(true-false)
// console.log(false-true)
// var myNumber=7739503469
// var myName="rishav"
// console.log(isNaN(myNumber));
// console.log(isNaN(myName));
// let x=5
// let y=5
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x<y)
// console.log(x>y)
// console.log(x||y)
// console.log(x&&y)
// console.log(x>1&&y>1)
// var a=3;
// var b=6;
// var c=a+b;
// console.log(c);
// function sum(a , b){
    // var a;
    // var b;
    // var c=a+b;
    // console.log(c);
// 
// sum(2,4);

function convert(){
    var celsius=document.getElementById("hello");
    var F=(celsius*1.8)+32
    alert(celsius)
    // document.getElementById("rishav").innerHTML=F
}
function meter(){
    var km=document.getElementById("rishav").value;
    var m=km*1000;
    document.getElementById("hello").innerHTML=m
}

function marks(){
    var marks1=parseInt(document.getElementById("rishav1").value);
    var marks2=parseInt(document.getElementById("rishav2").value);
    var marks3=parseInt(document.getElementById("rishav3").value);
    var marks4=parseInt(document.getElementById("rishav4").value);
    var marks5=parseInt(document.getElementById("rishav5").value);
    var mark= (marks1+marks2+marks3+marks4+marks5)/5;
    document.getElementById("hello1").innerHTML=mark;
}

function sum(){
 var num1 = 5;
 var num2 = 3;
 var sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2  )
}


   
   
