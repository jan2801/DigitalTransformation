import { Tabs } from '@consta/uikit/Tabs';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Button } from '@consta/uikit/Button';

const num_to_month = {
	0: 'январь',
	1: 'февраль',
	2: 'март',
	3: 'апрель',
	4: 'май',
	5: 'июнь',
	6: 'июль',
	7: 'август',
	8: 'сентябрь',
	9: 'октябрь',
	10: 'ноябрь',
	11: 'декабрь',
}

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
		// position: 'absolute',
		// height: '24px',
		// top: '22px',
		// right: '75px',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '24px',
		color: '#000000',
		textAlign: 'left',
		alignSelf: 'center',
	},
	usericon: {
		width: '32px',
		height: '32px',
		borderRadius: '16px',
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
		margin: '16px'
	},
	profileClicker: {
		position: 'absolute',
		top: '0px',
		right: '0px',
		height: '64px',
		width: '50%',
	},
	tabs: {
		paddingLeft: '44px',
		top: '27px',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "10px",
		lineHeight: "31px",
	},
	date: {
		textAlign: 'right',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "14px",
		lineHeight: "17px",
		color: "#A6B1B8",
		alignSelf: 'center',
	}
}

function Header(props) {
	const [value, setValue] = useState(props.activeTab);
	const setTab = (value)=>{
		setValue(value);
		props.setActiveTab(value);
	}
	return (<div style={styles.header}>
		<Row>
			<Col lg='7'>
				{/* <div style={styles.title}>Анализ таможенных данных</div> */}
				<Tabs 
					style={styles.tabs}
					value={value}
					onChange={({ value }) => setTab(value)}
					items={['Дашборд', 'Профиль']}
					getItemLabel={(item) => item}
					view="clear"
					fitMode
				/>
			</Col>
			<Col style={styles.date}>
				{String(new Date().getDate()).padStart(2, '0')+' '+num_to_month[new Date().getMonth()].toUpperCase().slice(0, 3)+' '+(new Date().getFullYear())}
			</Col>
			<Col lg='auto'>
				<Row>
					<Col lg='auto' style={{textAlign: '-webkit-right', width: '64px'}}><div style={styles.usericon}>XA</div></Col>
					<Col style={styles.username}>{props.user.name.split(' ')[0]+' '+props.user.name.split(' ')[1][0]+'.'+props.user.name.split(' ')[2][0]+'.'}</Col>
				</Row>
			</Col>
			{/* <div style={styles.profileClicker} onClick={props.openProfile}></div> */}
			<Col lg='1' style={{alignSelf: 'center'}}>
				<Button label='Выйти' view="secondary" onClick={props.logout} />
			</Col>
		</Row>
	</div>)
}

export default Header;