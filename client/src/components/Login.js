import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Card } from '@consta/uikit/Card';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';

const styles={
	main: {
		background: '#F8F8F8',
		height: '100vh',
	},
	card: {
		background: '#ffffff',
		position: 'absolute',
		top: '220px',
		left: '225px',
		width: '380px',
		height: '462px',
		padding: '50px',
	},
	title: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "24px",
		lineHeight: "32px",
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		color: "#000000"
	},
	label: {
		paddingTop: '20px',
		paddingBottom: '8px',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "16px",
		lineHeight: "150%",
		display: "flex",
		alignItems: "center",
		color: "rgba(0, 32, 51, 0.6)"
	},
	img1: {
		position: "absolute",
		width: "392px",
		height: "50px",
		left: "236px",
		top: "859px",
		background: 'url("image 11.png")', 
		backgroundRepeat:'no-repeat',
		backgroundSize:'contain',
	},
	img2: {
		position: "absolute",
		width: "732px",
		height: "783px",
		left: "926px",
		top: "132px",
		background: 'url("image_big.png")', 
		backgroundRepeat:'no-repeat',
		backgroundSize:'contain',
	}
}

function Login(props) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [visiblePassword, setVisiblePassword] = useState('');
	const handleLoginChange = (event)=>{
		const value = event.e.target.value;
		setLogin(value);
	}
	const handlePasswordChange = (event)=>{
		const value = event.e.target.value;
		setPassword(password+value[value.length-1]);
		setVisiblePassword(password.split('').map((item)=>'*').join(''))
	}
	return <div style={styles.main}>
		
		<Card style={styles.card}>
			<Row>
				<Col style={styles.title}>Авторизация</Col>
			</Row>
			<Row>
				<Col style={styles.label}>
					<img src="login_icon.svg" style={{marginRight: '4px'}}></img> Логин
				</Col>
			</Row>
			<Row>
				<Col>
					<TextField placeholder="Логин" width='full' value={login} onChange={handleLoginChange} />
				</Col>
			</Row>
			<Row>
				<Col style={styles.label}>
					<img src="pass_icon.svg" style={{marginRight: '4px'}}></img> Пароль
				</Col>
			</Row>
			<Row>
				<Col>
					<TextField placeholder="Пароль" width='full' value={visiblePassword} onChange={handlePasswordChange} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Button label="Войти" style={{position: 'absolute', bottom: '50px', right: '50px'}} onClick={()=>{props.sendLoginRequest(login, password)}} />
				</Col>
			</Row>
		</Card>
		<div style={styles.img1}>
		</div>
		<div style={styles.img2}>

		</div>
	</div>
}

export default Login;