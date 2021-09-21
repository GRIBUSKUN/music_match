const express = require('express'); //Import the express dependency
const express_app = express();              //Instantiate an express express_app, the main work horse of this server
const port = 80;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
express_app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('local_files/index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

express_app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

const config = {
    client: {
      client_id: 'JCzqxaWp6pZ8zJodVpc3eTSvsxTT6rxhr74FUfhJUNBS7gkSN2lAZG4VzEqR2Adi',
      redirect_uri: '<client-id>',
      scope: '<client-id>',
      state: '<client-id>',
      response_type: 'code'
    },
    auth: {
      tokenHost: 'https://api.genius.com/oauth/authorize?'
    }
  };
  
  const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');