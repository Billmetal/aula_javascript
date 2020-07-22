// CallBacks

function doSomething(callback){
    setTimeout(function(){
        // did something
        callback("First data");
    },1000);
}

function doOtherthing(callback){
    setTimeout(function(){
        // did other thing
        callback("Second data");
    },1000);
}

function doAll(){
    try{
    doSomething(function(data){
        var processedData = data.split("");

        try{
        doOtherthing(function(data2){
            var processedData2 = data2.split("");

            try{
            setTimeout(function(){
                console.log(processedData,processedData2);
            },1000);
            } catch (err){
                // handle error
            }
        });
        } catch(err){
            // handle error
        }
    });
    } catch(err){
        // handle error
    }
}

doAll();


// Promises
// modos : Pending , Fulfilled , Rejected

const doSomethingPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        // did something
        resolve("First data");
    },1000);
});

const doOtherthingPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        // did something
        resolve("Second data");
    },1000);
});

Promise.race([doSomethingPromise,doOtherthingPromise]).then(data => {
    console.log(data);
});

Promise.all([doSomethingPromise,doOtherthingPromise]).then(data => {
    console.log(data[0].split(""));
    console.log(data[1].split(""));
});

doSomethingPromise.then(data => {
    console.log(data.split(""));
    return doOtherthingPromise;
})
            .then(data2 => console.log(data2.split("")))
            .catch(err => console.log("Ops",err));