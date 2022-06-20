```(zsh)
$ npm install --global express-generator
$ express backend -e
$ cd backend
$ npm install
```

ejs가 뭐야..?

# nodemon
```(zsh)
$ cd ./backend
$ npm install -D nodemon

```
개발시 코드가 변하면 자동으로 서버를 재시작해주는 도구.
nodemon 도구를 devDependency로 추가하고, backend/package.json 파일에 아래 코드를 추가한다.


# Swagger 추가

```(zsh)
cd ./backend
npm install -S swagger-ui-express swagger-jsdoc
```

### backend/app.js 에 var app = express(); 밑에 다음의 코드를 추가해준다

```(javascript)
var app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Hello World',
			version: '1.0.0',
		},
	},
	apis: ['./routes/*.js'], // files containing annotations as above
}
const openapiSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));
```