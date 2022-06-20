```(zsh)
$ npm install --global express-generator
$ express backend -e
$ cd backend
$ npm install
```

ejs가 뭐야..?

# nodemon
개발시 코드가 변하면 자동으로 서버를 재시작해주는 도구.
nodemon 도구를 devDependency로 추가하고, backend/package.json 파일에 아래 코드를 추가한다.

```(zsh)
$ cd ./backend
$ npm install -D nodemon

```