import { useState } from 'react';
import { Card } from '@consta/uikit/Card';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Row, Col } from 'react-bootstrap';
import { ProgressLine } from '@consta/uikit/ProgressLine';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const styles = {
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
		height: '502px',
	},
	title: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "16px",
		lineHeight: "19px",
		marginBottom: '20px',
	},
	itemsBox: {

	},
	itemLabel: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "140%",
		color: "#000000",
		display: "-webkit-box",
		WebkitLineClamp: "1",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	itemValue: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "19px",
		textAlign: "right",
		color: "#000000"
	},
	item: {
		paddingTop: '20px',
	},
}

const items = [
	'Импорт',
	'Экспорт',
]

function RatingWidget(props) {
	const [value, setValue] = useState(items[0]);
	const data = props.data;
	const maxValue = Math.max(...(data['Импорт'].map(item=>item.value)));
	return <Card shadow={false} border style={styles.card}>
		<div style={styles.title}>Рейтинг импортированных товаров</div>
		<ChoiceGroup 
			value={value}
			onChange={({ value }) => setValue(value)}
			items={items}
			getItemLabel={(item) => item}
			multiple={false}
			name="ChoiceGroupExample"
			size='s'
		/>
		<div style={styles.itemsBox}>
			{data[value].map((item)=>{
				return (
					<div style={styles.item}>
						<Row>
							<Col style={styles.itemLabel}>{item.label}</Col>
							<Col lg='4' style={styles.itemValue}>{numberWithSpaces(item.value)}$</Col>
						</Row>
						<Row style={{paddingTop: '8px', paddingLeft: '0px'}}>
							<ProgressLine value={item.value/maxValue*100} style={{height: '16px', paddingLeft: '0px'}}/>
						</Row>
					</div>
				)
			})}
		</div>
	</Card>
}

export default RatingWidget;