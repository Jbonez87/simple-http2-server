# HTTP2 Server Setup Guide

## Create a certificate and key with the following commands

1. `openssl genrsa -des3 -passout pass:x -out server.pass.key 2048`
2. `openssl rsa -passin pass:x -in server.pass.key -out server.key`
3. `rm server.pass.key`
4. `openssl req -new -key server.key -out server.csr`

## You'll be prompted to answer the following questions

```
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.

Country Name (2 letter code) []:
State or Province Name (full name) []:
Locality Name (eg, city) []:
Organization Name (eg, company) []:
Organizational Unit Name (eg, section) []:
Common Name (eg, fully qualified host name) []:  
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:

```

## Running the server locally

1. `npm run start`
2. Go to [https://localhost:3000](https://localhost:3000)

> Your browser will automatically tell you that the url is unsafe. This is normal with self signed certificates.