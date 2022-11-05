import { useState } from 'react'
import { Card } from '@consta/uikit/Card';
import { Row, Col } from 'react-bootstrap';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';


function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const styles = {
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
		paddingBottom: '0px',
	},
	title: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#000000",
		paddingBottom: '20px',
	},
	choise: {
		paddingBottom: '20px',
	},
	item: {
		paddingBottom: '26px',
	},
	text: {
		
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#000000",
	},
}

function CountryRating(props) {
	const [value, setValue] = useState('тыс. долл.');
	return <Card shadow={false} border style={styles.card}>
		<Row><Col style={styles.title}>{props.label}</Col></Row>
		<Row><Col style={styles.choise}>
			<ChoiceGroup 
				value={value}
				onChange={({ value }) => setValue(value)}
				items={['тыс. долл.', 'кг.', 'тыс. долл./кг.']}
				getItemLabel={(item) => item}
				multiple={false}
				width="full"
				size='s'
				truncate
			/>
		</Col></Row>
		<Row><Col>
			{props.data.map((item)=>{
				return (
					<Row style={styles.item}>
						<Col lg='2'>
							{item['Флаг']}
						</Col>
						<Col lg='5' style={styles.text}>
							{item['Страна']}
						</Col>
						<Col lg='5' style={{...styles.text, ...{textAlign: 'right'}}}>
							{numberWithSpaces(item[value])}
						</Col>
					</Row>
				)
			})}
		</Col></Row>
	</Card>
}

export default CountryRating;