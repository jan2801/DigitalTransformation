import { useState } from 'react';
import { Table } from '@consta/uikit/Table';
import { Card } from '@consta/uikit/Card';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Row, Col } from 'react-bootstrap';
import { Button } from '@consta/uikit/Button';



const styles = {
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
	},
}

const items = [
	'Импорт',
	'Экспорт',
]

function TableWidget(props) {
	const [value, setValue] = useState(items[0]);
	return <Card style={styles.card} shadow={false} border >
		<Row style={{marginBottom: '10px'}}>
			<Col>
				<ChoiceGroup 
					value={value}
					onChange={({ value }) => setValue(value)}
					items={items}
					getItemLabel={(item) => item}
					multiple={false}
					name="ChoiceGroupExample"
					size='s'
				/>
			</Col>
			<Col style={{textAlign: 'right'}}>
				<Button label='Скачать таблицу' size='s' view='secondary' />
			</Col>
		</Row>
		<Row style={{ maxHeight: '470px'}}>
			<Col style={{overflowY: 'auto', maxHeight: '470px'}}>
				<Table rows={props.data[value].rows} columns={props.data[value].columns} borderBetweenColumns />
			</Col>
		</Row>
	</Card>
}

export default TableWidget;