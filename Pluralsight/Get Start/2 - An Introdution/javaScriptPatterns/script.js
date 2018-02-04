
var work = function () {
    console.log("working hard!");
};

var doWork = function (f) {
    console.log("starting");
    try {
        f();
    } catch (error) {
        console.log(error);
    }
    console.log("end");
};

doWork(work);