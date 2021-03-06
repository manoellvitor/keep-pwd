# Keep-Pwd

Keep-Pwd is a node.js API where you can store all your passwords in one place.

## Installation

Simply run the following command.

```bash
yarn install
```

Create your .ENV file on the root directory, and populates with your information.

```bash
// DB
MONGO_USER = 
MONGO_PASSWORD = 


// Server PORT
PORT = 

// Secret KEY
KEY = 
```

## Running

```bash
yarn start
```

## Usage
#### You can use Postman or CURL to send HTTP requests to the API.

#### ADD PASSWORD

```CURL
curl -X POST \
  https://localhost:3000/api/v1.2/addPassword \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"title": "Google",
	"description": "Google Password",
	"password": "Password12#"
}'

```
#### GET ALL PASSWORDS
```CURL
curl -X GET \
  https://localhost:3000/api/v1.2/passwords \
  -H 'cache-control: no-cache' \
```

#### GET PASSWORD BY ID
```CURL
curl -X GET \
  https://localhost:3000/api/v1.2/password/5fbf8982ad78a648dcec59c5 \
  -H 'cache-control: no-cache' \
```

#### UPDATE PASSWORD
```CURL
curl -X PATCH \
  https://localhost:3000/api/v1.2/updatePassword/5fbf8982ad78a648dcec59c5 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"title": "Updated",
	"description": "Updated",
	"password": "Updated123"
}'
```

#### DELETE PASSWORD
```CURL
curl -X DELETE \
 https://localhost:3000/api/v1.2/deletePassword/5fbf8982ad78a648dcec59c5 \
  -H 'cache-control: no-cache' \
```

#### REGISTER USER
```CURL
curl -X POST \
  https://localhost:3000/api/v1.2/register \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 217ae210-714c-6635-0b3a-95f076136bab' \
  -d 'name=username&email=email%40gmail.com&password=Password123&confirmPassword=Password123'
```

#### LOGIN
```CURL
curl -X POST \
   https://localhost:3000/api/v1.2/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 438632af-30b5-fc5a-5de6-d8c32069715f' \
  -d 'email=email%40gmail.com&password=Password123'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
