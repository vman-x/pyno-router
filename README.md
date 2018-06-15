# PyNo-Router

  

This is a simple node package to route http/https requests to python functions. It is useful for calling python functions from a web UI front end. Feel free to make your own changes and experiment.

  

## License

The following application is published under **GNU GPLv3** License. Please view `LICENSE` file included in the repository for more information.

  

## Usage

As of now, this application accepts data from **GET** requests. POST request support will be added in upcoming versions. Clone the repository using the below command.

`git clone https://github.com/IamVman/pyno-router.git`

### Install dependencies
Navigate to the root directory and run below npm commands to install the missing dependencies or to setup for the first time. Make sure that package.json file is in the root directory.

`npm install -g npm`
`npm install`

After installing the dependencies, run the server using
`node server.js`

### Passing data to python script
Currently, the server is set to accept only GET requests as part of pilot phase. The format to pass data to python script as follows

http://<hostname\>:<port\>/run?<arg1\>=<data1\>&<arg2\>=<data2\>

By default, when running in local machine, server listens on port 8888. In this case, URL would be
http://localhost:8888/run?myarg=hello&myarg2=world

The names of arguments don't matter much. The ordering of arguments is important. 

### Testing
A test python script is given in the `python_scripts` folder which would output whatever arguments passed to it along with its own file path
