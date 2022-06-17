
function LoginPage(props) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };
    const dispatch = useDispatch();
    const classes = useStyles();
    const [formErrorMessage, setFormErrorMessage] = useState('');
    const onSubmitHandler = (e) => {
        console.log("SubmitHandler 시작");
        setTimeout((e) => {
            let dataToSubmit = {
                username: Username,
                password: Password
            };

            dispatch(loginUser(dataToSubmit))
                .then(response => {
                    const accessToken = response.payload.data.access_token;
                    if (response.payload.message === 'success') {
                        window.localStorage.setItem('userId', response.payload.data.username);
                        window.localStorage.setItem('accessToken', accessToken);
                        document.cookie = `accessToken=${accessToken}`;
                        axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie("accessToken")}`;
                        props.history.push("/");
                    } else {
                        setFormErrorMessage('비밀번호 또는 계정을 확인해주세요')
                    }
                })

                .catch(err => {
                    setFormErrorMessage('비밀번호 또는 계정을 확인해주세요')
                    setTimeout(() => {
                        setFormErrorMessage("로그인 실패")
                    }, 3000);
                });
        }, 500);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    COPANG
                </Typography>
                <form className={classes.form} noValidate

                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        //autoComplete="email"
                        onChange={onUsernameHandler}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onPasswordHanlder}
                    />
                    <div>
                        {formErrorMessage && (
                            <label >
                                <p style={{ color: '#ff0000bf', fontSize: '0.7rem' }}>
                                    {formErrorMessage}
                                </p>
                            </label>
                        )}
                    </div>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button

                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSubmitHandler}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"회원가입"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}