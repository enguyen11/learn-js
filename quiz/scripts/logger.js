// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const logger = {
    logMSG: function (){
        console.log(`Error Message from: ${this.errMSG}`);
    }
}

const obj1 = {
    errMSG: "Error in OBJ1",
}

const obj2 = {
    errMSG: "Error in OBJ2",
}

logger.logMSG.call(obj1);
logger.logMSG.call(obj2);
