import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SelectBox from './SelectBox';
import { Button } from '@consta/uikit/Button';


const months = [
	
];
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
for (var i=0; i<16; i++) {
	months.push({label: num_to_month[i%12]+' '+(2021+Math.floor(i/12)), id: i});
}

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

	const [filters, setFilters] = useState(props.filters);

	const sendFilters = props.setFilters;

	const clearFilters = ()=>{
		setFilters({
			start: {label: 'Все время', id: '1'},
			end: {label: 'Все время', id: '1'},
			country: {label:"Все страны",code:"ALL"},
			subject: {code: '00000', label: 'Все субъекты'},
			level: {label: '1', id: '1'},
			cat: null,
		});
	}

	const setFilter = (value, filter)=>{
		filters[filter] = value;
	}

	return (<div style={styles.sidebar}>
		<Row>
			<Col>
				<SelectBox label='Период' items={months} onChange={(value)=>{setFilter(value, 'start')}} />
			</Col>
			<Col>
				<SelectBox label='&nbsp;' value={months[months.length-1]} items={months} onChange={(value)=>{setFilter(value, 'end')}} />
			</Col>
		</Row>
		<Row>
			<SelectBox label='Страна' items={props.countries.map((item)=>{return {label:item.name, code: item.code}})}  onChange={(value)=>{setFilter(value, 'country')}} />
		</Row>
		<Row>
			<SelectBox label='Субъект РФ' items={props.subjects.map((item)=>{return {label:item.name, code: ''+item.code}})} onChange={(value)=>{setFilter(value, 'subject')}} />
		</Row>
		<Row>
			<SelectBox label='Уровень ТН ВЭД' items={[{label: '1', id: '1'}, {label: '2', id: '2'}, {label: '3', id: '3'}, {label: '4', id: '4'}, {label: '5', id: '5'}]} onChange={(value)=>{setFilter(value, 'level')}} />
		</Row>
		<Row>
			<SelectBox label='ТНВЭД' multiple items={[{label: '1', id: '1', code: '1'}, {label: '2', id: '2', code: '2'}, {label: '3', id: '3', code: '3'}]} onChange={(value)=>{setFilter(value, 'cat')}} />
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