import { Row, Col } from 'react-bootstrap';
import { Sidebar as SBar } from '@consta/uikit/Sidebar';

const styles = {
	sidebar: {
		background: '#FFFFFF',
		boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)',
		paddingLeft: '30px',
		paddingRight: '30px',
		paddingTop: '146px',
		width: '25%',
		zIndex: '9',
	},
	usericon: {
		width: '100px',
		height: '100px',
		background: '#50ACF6',
		borderRadius: '4px',
		marginBottom: '20px',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "24px",
		lineHeight: "31px",
		alignItems: "center",
		textAlign: "center",
		color: "#FFFFFF",
		padding: '33px',
	},
	name: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 800,
		fontSize: "24px",
		lineHeight: "30px",
		color: "#000000",
	},
	dataLabel: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "16px",
		color: "#727171",
		padding: '10px',
	},
	data: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "16px",
		lineHeight: "16px",
		color: "#000000",
		padding: '10px',
	},
	dataTitle: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "16px",
		lineHeight: "16px",
		color: "#000000",
		paddingTop: '45px',
		paddingLeft: '10px',
		paddingBottom: '10px',
	},
	title: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#3173F2",
		padding: '8px 16px 8px 16px',
		background: '#E1EBFD',
		borderRadius: '2px',
		width: 'auto',
	},
}

function UserProfile(props) {
	return <SBar position='left' isOpen={props.open} style={styles.sidebar}>
		<Row>
			<Col>
				<div style={styles.usericon}>{props.user.name.split(' ')[0][0]+props.user.name.split(' ')[2][0]}</div>
			</Col>
		</Row>
		{
			props.user.name.split(' ').map((item)=>{
				return <Row><Col style={styles.name}>{item}</Col></Row>
			})
		}
		<Row style={styles.dataTitle}>
			Данные
		</Row>
		<Row>
			<Col lg='5' style={styles.dataLabel}>Email:</Col>
			<Col lg='7' style={styles.data}>{props.user.email}</Col>
		</Row>
		<Row>
			<Col lg='5' style={styles.dataLabel}>Телефон:</Col>
			<Col lg='7' style={styles.data}>{props.user.phone}</Col>
		</Row>
		<Row>
			<Col lg='5' style={styles.dataLabel}>Рабочий адресс:</Col>
			<Col lg='7' style={styles.data}>{props.user.adress}</Col>
		</Row>
		<Row style={styles.dataTitle}>
			Должность:
		</Row>
		<Row style={{display: 'flex', flexDirection: 'row'}}>
			{props.user.titles.map((title)=>{
				return <div style={styles.title}>{title}</div>
			})}
		</Row>
	</SBar>
}

export default UserProfile;