const express = require('express')
const app = express()
const port = 8888
const spawn = require('child_process').spawn;  
const script_path = './python_scripts/test.py'

app.get('/',function(req,res){
    res.send('Nothing much to see here. <br> \
    Pass GET arguments via /run route in the format http://localhost:8888/test?arg1=hello&arg2=world <br>\
    Argument keys doesn\'t matter. Keep the order <br> \
    For more info, please visit <a href="https://github.com/IamVman/pyno-router">PyNo Router</a>')
})

app.listen(port,function(){
    console.log('Listening on port '+port)    
})

var pyNo = function(args,path=script_path){
    return new Promise((resolve, reject) => {
        const std_spawn = spawn('python', [path].concat(args));
        std_spawn.stdout.on('data', (data) => {
            resolve(data)
        }); 
        std_spawn.stderr.on('data', (data) => {
            reject("Calling python function unsuccessful")
        })
    })
}
    
app.get('/run', (req, res) => {
    args = []
    for(var key in req.query){
        if(req.query.hasOwnProperty(key)){
            args.push(req.query[key])
        }
    }
    console.log("Request to python: "+[args])
    pyNo(args).then((data) => {
        console.log("Response from python: "+data.toString());
        res.end(data);
    }).catch((reason)=>{
        console.log("ERROR: "+reason.toString());
        res.end(reason);
    })
})

module.exports = app