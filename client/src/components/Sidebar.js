import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SelectBox from './SelectBox';
import { Button } from '@consta/uikit/Button';

const styles = {
	sidebar: {
		background: '#FFFFFF',
		boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)',
		height: '100%',
		paddingLeft: '20px',
		paddingRight: '20px',
		paddingTop: '30px',
		position: 'relative',
	},
	button: {
		fontSize: '16px',
	}
}

function Sidebar(props) {

	const [filters, setFilters] = useState({
		period: null,
		period2: null,
		country: null,
		subject: null,
		level: null,
		cat: null,
	});

	const sendFilters = props.setFilters;

	const clearFilters = ()=>{
		setFilters({
			period: null,
			period2: null,
			country: null,
			subject: null,
			level: null,
			cat: null,
		});
	}

	const setFilter = (value, filter)=>{
		filters[filter] = value;
	}

	return (<div style={styles.sidebar}>
		<Row>
			<Col>
				<SelectBox label='Период' items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}]} onChange={(value)=>{setFilter(value, 'period')}} />
			</Col>
			<Col>
				<SelectBox label='&nbsp;' items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}]} onChange={(value)=>{setFilter(value, 'period2')}} />
			</Col>
		</Row>
		<Row>
			<SelectBox label='Страна' items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}]} onChange={(value)=>{setFilter(value, 'country')}} />
		</Row>
		<Row>
			<SelectBox label='Субъект РФ' items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}]} onChange={(value)=>{setFilter(value, 'subject')}} />
		</Row>
		<Row>
			<SelectBox label='Уровень ТН ВЭД' items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}]} onChange={(value)=>{setFilter(value, 'level')}} />
		</Row>
		<Row>
			<SelectBox label='ТНВЭД' multiple items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}]} onChange={(value)=>{setFilter(value, 'cat')}} />
		</Row>
		<Row style={{position: 'absolute', bottom: '32px', width: '100%'}}>
			<Row>
				<Col>
					<Button 
						label='Очистить фильтр' 
						view="secondary" 
						size='m' 
						width='full' 
						style={styles.button}
						onClick={clearFilters}
					/>
				</Col>
			</Row>
			<Row style={{paddingTop: '10px'}}>
				<Col>
					<Button 
						label='Запустить расчет' 
						size='m' 
						width='full' 
						style={styles.button} 
						onClick={()=>{sendFilters(filters)}}
					/>
				</Col>
			</Row>
		</Row>
	</div>)
}

export default Sidebar;