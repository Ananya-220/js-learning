// Ep. 4 
var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}


// Ep. 5
var a = 10;
function b() {
    var x = 10;
}
console.log(window.a);
console.log(a);
console.log(this.a);


// Ep. 6
var a;
console.log(a);
a = 10;
console.log(a);
a = "Hello Ananya !";
console.log(a);


// Ep. 7
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}

a();


// Ep.10
function z() {
    function x() {
        var a = 7;
        function y() {
            console.log(a);
        }
        y();
    }
    x();
}
z();


// Ep.11
// Using let
function x() {
    for(let i = 1 ; i <= 5 ; i++){
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello Ananya !");
}
x();

// Using var
function x() {
    for(let i = 1 ; i <= 5 ; i++){
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Hello Ananya !");
}
x();



// Ep.14
function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener("click", function () {
            console.log("Button Clicked", ++count);
        })
}
attachEventListeners();