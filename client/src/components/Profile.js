import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Card } from '@consta/uikit/Card';
import { Button } from '@consta/uikit/Button';

const styles={
	main: {
		padding: '20px',
		background: '#F8F8F8',
		height: 'Calc(100vh - 64px)',
	},
	usercard: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '45px',
		background: '#ffffff',
		height: '190px',
	},
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
		background: '#ffffff',
		height: '190px',
	},
	requestcard: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
		background: '#ffffff',
	},
	requestscard: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
		background: '#ffffff',
		marginBottom: '20px',
	},
	usericon: {
		position: 'relative',
		borderRadius: '50px',
		background: '#0088A3',
		width: '100px',
		height: '100px',
	},
	usericoninner: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
		opacity: '0.24',
		width: '100px',
		height: '100px',
	},
	usericontext: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		width: '100px',
		height: '100px',
		padding: '30px',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "24px",
		lineHeight: "31px",
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		color: "#FFFFFF",
		
	},
	username: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "24px",
		lineHeight: "29px",
		color: "#000000"
	},
	usertitle: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#000000",
		paddingTop: '10px',
		paddingBottom: '10px',
	},
	privelage: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#3173F2"
	},
	title: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "32px",
		lineHeight: "32px",
		color: "#000000",
		paddingRight: '40px',
	},
	tabletitle: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#000000",
		paddingLeft: '30px',
		paddingBottom: '10px'
	}
}


function Profile(props) {
	const [activeRequest, setActiveRequest] = useState(-1);
	return <div style={styles.main}>
		<Row>
			<Col lg='9'>
				<Card shadow={false} border style={styles.usercard}>
					<Row>
						<Col lg='auto'>
							<div style={styles.usericon}>
								<div style={styles.usericoninner}></div>
								<div style={styles.usericontext}>{props.user.name.split(' ')[0][0]+props.user.name.split(' ')[2][0]}</div>
							</div>
						</Col>
						<Col style={{paddingLeft: '28px'}}>
							<Row>
								<Col style={styles.username}>
									{props.user.name}
								</Col>
							</Row>
							<Row>
								<Col style={styles.usertitle}>
									{props.user.titles.map((value)=><span>{value}</span>)}
								</Col>
							</Row>
							<Row>
								<Col style={styles.privelage}>
									{props.user.privelage? 'привелигированный доступ': ''}
								</Col>
							</Row>
						</Col>
					</Row>
				</Card>
			</Col>
			<Col lg='3'>
				<Card shadow={false} border style={styles.card}>
					место для рекламы
				</Card>
			</Col>
		</Row>
		<Row>
			<Col>
				<Card shadow={false} border style={styles.requestscard}>
					<Row>
						<Col style={{display: 'flex', flexDirection: 'row', paddingBottom: '40px'}}>
							<div style={styles.title}>Мои запросы</div>
							{/* <Button label="создать запрос" view="secondary" onClick={props.goToDashboard	} /> */}
						</Col>
					</Row>
					<Row>
						<Col style={styles.tabletitle}>
							Дата
						</Col>
						<Col style={styles.tabletitle}>
							Время
						</Col>
						<Col style={styles.tabletitle}>
							Период
						</Col>
						<Col style={styles.tabletitle}>
							Страна
						</Col>
						<Col style={styles.tabletitle}>
							Субъекты РФ
						</Col>
						<Col style={styles.tabletitle}	>
							ТНВЭД
						</Col>
					</Row>
					<div style={{overflowY: 'auto', height: 'Calc(100vh - 494px)'}}>
					{
						props.user.requests.map((item, index)=>{
							return 	<Card shadow={activeRequest===index} border style={styles.requestcard}
										onMouseEnter={() => setActiveRequest(index)}
										onMouseLeave={() => setActiveRequest(-1)}
										onClick={()=>{props.setFilters({
											start: item.start,
											end: item.end,
											country: item.country,
											subject: item.subject,
											level: item.level,
											cat: item.cat,
										})}}
									>
										<Row>
											<Col>
												{item.date}
											</Col>
											<Col>
												{item.time}
											</Col>
											<Col>
												{item.start.label+' - '+item.end.label}
											</Col>
											<Col>
												{item.country.label}
											</Col>
											<Col>
												{item.subject.label}
											</Col>
											<Col>
												{item.cat===null? 'Все категории' : item.cat.map((item)=>{return item.label}).join(', ')}
											</Col>
										</Row>
									</Card>
						})
					}
					</div>
				</Card>
				
			</Col>
		</Row>
	</div>
}

export default Profile;