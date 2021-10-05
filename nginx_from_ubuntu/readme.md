
`sudo docker build -t nady/ubuntu-nginx .`

`sudo docker run -p 8081:80 nady/ubuntu-nginx` 

""***didn't have any problems, so didn't need any command for cli***""

**did the build and run with the cmd part, the results are same though**

**Possible reasons:** , 

 if your PC has ubuntu and docker installed and Dockerhub is already associated then it pulls the nginx easily without any complication   

another reason might be the OS,

or maybe in my pc all processes has access to run in the background
itself has nginx installed on it as some kind of extension
no need to daemon off !
