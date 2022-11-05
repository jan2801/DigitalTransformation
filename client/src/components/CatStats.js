import { useState } from 'react'
import { Card } from '@consta/uikit/Card';
import { Row, Col } from 'react-bootstrap';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


const styles = {
	label: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#000000',
	},
	text: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '32px',
		lineHeight: '39px',
		color: '#000000',
	},
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
	},
	title: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 800,
		fontSize: "32px",
		lineHeight: "39px",
		color: "#000000",
		paddingBottom: '10px',
	},
}

function ShortStats(props) {
	return (
		<Card shadow={false} border style={styles.card}>
			<Row>
				<Col style={styles.title}>
					{props.label}
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={styles.label}>{props.data[0].label}</div>
					<div style={styles.text}>{numberWithSpaces(props.data[0].value)}$</div>
				</Col>
				<Col>
					<div style={styles.label}>{props.data[1].label}</div>
					<div style={styles.text}>{numberWithSpaces(props.data[1].value)}$</div>
				</Col>
				<Col>
					<div style={styles.label}>{props.data[2].label}</div>
					<div style={styles.text}>{props.data[2].value}%</div>
				</Col>
			</Row>
		</Card>
	)
}

export default ShortStats;