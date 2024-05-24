// Immediately Invoked Function Expressions(IIFE)
/* some time there is pollution on globle scope so remove
 globle scope pollution we use IIFE */

(function chai(){
    // name IIFE
    console.log("DB CONNECTED");
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Devesh")