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


# EC2 install git, node.js 

## htop (resource monitor)
```(zsh)
sudo yum update -y
sudo yum install git htop -y
htop
```
```(zsh)
mkdir ~/local
cd local
wget https://nodejs.org/dist/v16.15.1/node-v16.15.1-linux-x64.tar.xz
tar xvf <download-file.tar>
```
~/.bash_profile 에 node 환경변수 추가
```(zsh)
# ~/.bash_profile
PATH=$PATH:<node install path>/bin
:wq!

source ~/.bash_profile
node -v
```

# Nginx 설치 및 node.js 연결

### nginx 웹서버를 설치하고 reverse proxy 설정을 통해 node.js 4000번 백엔드 포트로 연결한다

```
sudo amazon-linux-extras install nginx1
sudo vi /etc/nginx/nginx.conf
```

error_page 404 /404.html; 위에 다음 내용 삽입
```(nginx)
    location / {
        sendfile off;
	    proxy_pass              	http:127.0.0.1:4000;
    	proxy_redirect          	default;
    	proxy_http_version      	1.1;
        proxy_set_header        	Host	$host;
        proxy_set_header        	X-Real-IP	$remote_addr;
        proxy_set_header        	X-Forwarded-For	$proxy_add_x_forwarded_for;
        proxy_set_header        	X-Forwarded-Proto	$scheme;
        proxy_cache_bypass			$http_upgrade;
        proxy_max_temp_file_size	0;
    }
```
