const spawn = require('child_process').spawn;
const express = require('express');

const app = undefined;

//app = express(); /* This is safe to comment out if you don't want the express endpoint */
const port = 1000; //the port for express
const endpoint_name = "/cmd"; //the endpoint for express commands. Look at how this is used below.

const exec_name = ""; //the command to run
const exec_params = []; //the params to pass, any time theres a space make a new item (see examples!)
const log_title = "[server-runner] "; //A title to use while logging, leave blank for nothin'

const child = spawn(exec_name, exec_params);

//This function will feed the programs data to stdout
//Maybe in the future it should write to a file too?
//I think most applications have their own log files, so that'd maybe be redundant.
function logger(log_data) {
    process.stdout.write(log_title + log_data.toString());
    //TODO: Write to a log file
}
child.stdout.on('data', logger);
child.stderr.on('data', logger);

//Detect proccess exit and stop the whole node app
function exit_handler(exit_code){
    logger("Program exited with code: " + exit_code + "\n");
    logger("Assuming this was a server, it was probably unexpected" + "\n");
    logger("This script will now exit with exit code 1" + "\n");
    process.exit(1);
}
child.on('close', exit_handler);

if(app !== undefined){
    app.use(express.json());
    //TODO: maybe a post method?
    app.get(endpoint_name + '/:cmd', (req,res)=>{
        
    });

    app.listen(port, ()=>{
        console.log("It lives, port " + port);
    });
}

