`$ npm init`

`$ npm i express axios`

Basically there are 2 services/microservices this time and we have to request one through another ,not exposing the internal container.

so we first go to the internal container, then build the dockerfile and then run it

`$ sudo docker build -t internal .`

`$ sudo docker run -p internal`

`$ sudo docker ps`

`$ sudo docker inspect e4`  **e4 is my internal container id**

copy the Ipv4 address.

Then going into external container and go to the index.js file there, then change the `internalURL` from `localhost` to the ip u just coppied and make the port number internal container's portnumber which is `8080`. 

then build the external container and run

`$ sudo docker build -t external`

`$ sudo docker run -p 8081:8081 external`

then go to `localhost:8081`

and see your desired output.