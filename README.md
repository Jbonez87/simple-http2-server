# HTTP2 Server Setup Guide

## Quick Start for Certificate and Key

```
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```

## Running the server locally from terminal

1. `npm run start` (or whichever command you prefer from package.json)
2. `node server-client.js` (run this in a separate terminal window)
3. The console should return the response when running server-client file
