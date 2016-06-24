
#Mongoose Demo

###Instructions

    (Optional) Install your favorite text editor. Brackets.io atom eclipse.
    Install Node.js for package management
    Install MongoDB    
    Add to path.

    Create directory for db. Defaults to:
    C:\data\db\

    Start MongoDB
    $ mongod

    Install git

    Clone this repository. Get the clone link from the Clone link on this web page.
    $ git clone https://github.com/sauriemma/mongoose-demo

    Cd to the mongoose-demo
    $ npm install
    $ npm start

    Open a browser and point it at localhost:3000

    Post
    Content-Type: application/json
    http://localhost:3000/users

    {
        "user" : "jessica",
        "password" : "password"
    }

    Get
    http://localhost:3000/users

    Show DBs
    $ show dbs

    Show Collections
    $ show collections

    Show Items
    $ db.users.find()

    Stop MongoDB - switch to db admin then shutdown server
    $ use admin
    $ db.shutdownServer()


###MongoDB
https://docs.mongodb.com
#Other mongo shell commands
db.currentOp() - shows you all currently running operations
db.killOp(opid) - lets you kill long running queries
db.serverStatus() - shows you stats for the entire server, very useful for monitoring
db.stats() - shows you stats for the selected db
db.collection.stats() - stats for the specified collection

###Build a RESTful API using Node and MongoDB
https://codeforgeek.com/2015/08/restful-api-node-mongodb/
http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/

###Express
http://expressjs.com/en/api.html

###Express body-parser
https://github.com/expressjs/body-parser#examples

###Things I wish I knew about MongoDB a year ago
http://snmaynard.com/2012/10/17/things-i-wish-i-knew-about-mongodb-a-year-ago/

###Mongoose
http://mongoosejs.com/docs/guide.html
// if you are working on a single database, simple connect functions will work.
// if you must connect to multiple databases,
// you must connect to each database by using the createConnection method
// http://www.nodejsnotes.com/2013/05/mongoose-and-multiple-database.html


###The DB Team

    Stephen Auriemma
