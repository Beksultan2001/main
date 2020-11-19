
// function just(n){
//     console.log(n.trim().split(' '))
// }
// just('     Hello      World');

// function just1(n,number){
//     return n.slice(0,number);
// }
// console.log(just1("Robin Singh",4))


// function just2(n){
//     t = n.trim().split(' ');

//     n.slice(0,t[0].length+2)+"."
//     i = t[0].length; 
//     while(i<!null)
// }
// console.log(just2('Robin    Singh'));

// function just3(n){
//     t = n.toLowerCase().split(" ").join('-');
//     return t;
// };
// console.log(just3("Robin Singh from USA."));

// function just4(str,separator){
    
//     if(typeof(separator) == 'underfined'){
//         return str;
//     }
//     var ter = [];
//     var str2;
//     str1 = str.toUpperCase();
//     console.log(str1);
//     for (var i = 0; i<str.length; i++){{
//         if(str1[i] == str[i]){
//             console.log(i);
//             str2 = str.replace(str.charAt(i-1),str.charAt(i-1)+ separator)
//         }
//     }}
//     return str2;

// }
// console.log(just4('helloWorldBeksultan','-'));

// function just5(n,add,add1){
//     var t = n.indexOf('exercises');
//     var n1 = n.slice(0,add1);
//     var n2 = n.slice(add1,t.length);
//     if(add1==undefined && add == undefined){
//         n1 = n.slice(0,t);
//         n2 = n.slice(t,t.length);
//         return "1 " + n;
//     }else if(add1 == undefined){
//         return "2 " + add + n;
//     }else if(add !=undefined && add1!=undefined ){
//         return '3'+n1+add+n2
//     }
    
// };
// console.log(just5('We are doing some exercises '));

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var f = fruits.entries();
// console.log(f)
// var t;
// for (x in fruits) {
//     // document.getElementById("demo").innerHTML += x + "<br>";
//     console.log(x);
// }
// console.log(t);



