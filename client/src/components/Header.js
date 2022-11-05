
import { Row, Col } from 'react-bootstrap';

const styles = {
	header: {
		//position: 'fixed',
		width: '100%',
		height: '64px',
		//left: '0px',
		//top: '0px',
		background: '#FFFFFF',
		boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)',
		zIndex: '10',
	},
	title: {
		position: 'absolute',
		height: '24px',
		left: '27px',
		top: '22px',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '24px',
		color: '#000000',
	},
	username: {
		position: 'absolute',
		height: '24px',
		top: '22px',
		right: '75px',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '24px',
		color: '#000000',
		textAlign: 'right',
	},
	usericon: {
		position: 'absolute',
		top: '18px',
		width: '32px',
		height: '32px',
		right: '25px',
		borderRadius: '6px',
		background: '#2196F3',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "10px",
		lineHeight: "31px",
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		color: "#FFFFFF",
		padding: '9px',
	},
	profileClicker: {
		position: 'absolute',
		top: '0px',
		right: '0px',
		height: '64px',
		width: '50%',
	}
}

function Header(props) {
	
	return (<div style={styles.header}>
		<Row>
			<Col>
				<div style={styles.title}>Анализ таможенных данных</div>
			</Col>
			<Col style={styles.username}>
				Христорожденственский А.А. 
			</Col>
			<div style={styles.usericon}>XA</div>
			<div style={styles.profileClicker} onClick={props.openProfile}></div>
		</Row>
	</div>)
}

export default Header;