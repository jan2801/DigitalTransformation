import './App.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ShortStats from './components/ShortStats';
import PieWidget from './components/PieWidget';
import PieWidgetSmall from './components/PieWidgetSmall';
import RatingWidget from './components/RatingWidget';
import TableWidget from './components/TableWidget';
import CatStats from './components/CatStats';
import CountryRating from './components/CountryRating';
import PlotWidget from './components/PlotWidget';
import ChoiseCat from './components/ChoiseCat';
import UserProfile from './components/UserProfile';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';



const mockData = {
	table: {
		'Импорт': {
			rows: [
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'Нигерия',
					subject: 'Московская обл.',
					mass: '1133',
					cost: '831234',
				},
			],
			columns: [
				{
					title: 'ТНВЭД',
					accessor: 'id',
					align: 'left',
					width: 300,
					sortable: true,
				},
				{
					title: 'Период',
					accessor: 'period',
					align: 'left',
					width: 150,
					sortable: true,
				},
				{
					title: 'Страна',
					accessor: 'country',
					align: 'left',
					width: 230,
					sortable: true,
				},
				{
					title: 'Субъект РФ',
					accessor: 'subject',
					align: 'left',
					width: 230,
					sortable: true,
				},
				{
					title: 'Вес, КГ',
					accessor: 'mass',
					align: 'left',
					width: 145,
					sortable: true,
				},
				{
					title: 'Стоимость, тыс.долл.',
					accessor: 'cost',
					align: 'right',
					width: 80,
					sortable: true,
				},
			],
		},
		'Экспорт': {
			rows: [],
			columns: [],
		},
	},
	shortStats: [
		{label: 'Затрачено на импорт товаров', value: 12666666}, 
		{label: 'Заработано на экспорте товаров', value: 12000000},
		{label: 'Отношение импорта и экспорта', value: 24},
	],
	pieData: {
		'01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ': 45,
		'26-РУДЫ, ШЛАК И ЗОЛА': 37,
		'27-ТОПЛИВО МИНЕРАЛЬНОЕ, НЕФТЬ И ПРОДУКТЫ ИХ ПЕРЕГОНКИ; БИТУМИНОЗНЫЕ ВЕЩЕСТВА; ВОСКИ МИНЕРАЛЬНЫЕ': 13,
	},
	ratingData: {
		'Импорт': [
			{label: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ', value: 6000000},
			{label: '26-РУДЫ, ШЛАК И ЗОЛА', value: 4933299},
			{label: '27-ТОПЛИВО МИНЕРАЛЬНОЕ, НЕФТЬ И ПРОДУКТЫ ИХ ПЕРЕГОНКИ; БИТУМИНОЗНЫЕ ВЕЩЕСТВА; ВОСКИ МИНЕРАЛЬНЫЕ', value: 1733333}
		],
		'Экспорт': [
			{label: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ', value: 6000000},
			{label: '26-РУДЫ, ШЛАК И ЗОЛА', value: 4933299},
			{label: '27-ТОПЛИВО МИНЕРАЛЬНОЕ, НЕФТЬ И ПРОДУКТЫ ИХ ПЕРЕГОНКИ; БИТУМИНОЗНЫЕ ВЕЩЕСТВА; ВОСКИ МИНЕРАЛЬНЫЕ', value: 1733333}
		],
	},
	countryRating: [
		{
			'Страна': 'Норвегия',
			'Флаг': 'norway',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'norway',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'norway',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'norway',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'norway',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
	],
	plot: {
		'Импорт': {
			x: ['январь 2021', 'февараль 2021', 'март 2021', 'апрель 2021', 'май 2021'],
			y: [5, 2, 3, 4, 7],
		},
		'Экспорт': {
			x: ['январь 2021', 'февараль 2021', 'март 2021', 'апрель 2021', 'май 2021'],
			y: [1, 3, 2, 5, 4],
		}
	},
	cats: [
		{
			label: '01',
			value: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
		},
		{
			label: '26',
			value: '26-РУДЫ, ШЛАК И ЗОЛА',
		},
		{
			label: '27',
			value: '27-ТОПЛИВО МИНЕРАЛЬНОЕ, НЕФТЬ И ПРОДУКТЫ ИХ ПЕРЕГОНКИ; БИТУМИНОЗНЫЕ ВЕЩЕСТВА; ВОСКИ МИНЕРАЛЬНЫЕ',
		}
	],
	user: {
		name: 'Христорожденственский Александр Александрович',
		email: 'dn.ermoshko@gmail.com',
		phone: '+7 (911) 674 - 40 - 65',
		adress: 'г. Архангельск, наб.Северной двины, д. 17, каб 101 ',
		titles: ['Заместитель директора ',],
	}
}


const styles = {
	container: {
		padding: '0px',
		height: '100%',
	},
	leftBar: {
		height: '100%',
		padding: '0px',
	},
	rightBar: {
		paddingLeft: '16px',
		paddingTop: '20px',
		paddingRight: '20px',
		height: 'Calc(100vh - 64px)',
		overflowY: 'auto',
	},
	allCat: {
		paddingLeft: '16px',
		paddingRight: '16px',
		paddingTop: '8px',
		paddingBottom: '8px',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '16px',
		lineHeight: '19px',
		width: 'fit-content',
		color: '#3173F2',
		flex: 'none',
		order: '0',
		flexGrow: '0',
		backgroundColor: '#E1EBFD',
	},
	
};


function sendRequest(url) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onload = function() {
		if (xhr.status !== 200) {
			alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
	  	} else { 
			alert(`Готово, получили ${xhr.response.length} байт`);
	  	}
	};
}

function App() {

	const setFilters = (filters)=>{
		console.log(JSON.stringify(filters));
		// get request and update data
	}



	const [activeCat, setActiveCat] = useState('01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ');
	const [sideBarOpen, setSideBarOpen] = useState(false);
	return (
		<Theme preset={presetGpnDefault} style={{height: '100%'}}>
			<Container fluid style={styles.container}>
				<Row style={{width: '100%', margin: '0px'}}>
					<Header openProfile={()=>{setSideBarOpen(!sideBarOpen)}} />
				</Row>
				<Row style={{height: 'Calc(100% - 64px)', width: '100%', margin: '0px'}}>
					<Col lg='3' style={styles.leftBar}>
						<Sidebar setFilters={setFilters}/>
						<UserProfile user={mockData.user} open={sideBarOpen} />
					</Col>
					<Col lg='9' style={styles.rightBar}>
						<Row>
							<Col>
								<div style={styles.allCat}>Все выбранные категории</div>
							</Col>
							<Col style={{textAlign: 'right'}}>
								<Button label='Скачать отчет' view='secondary' />
							</Col>
						</Row>
						<Row>
							<Col lg='8'>
								<Row>
									<Col>
										<ShortStats data={mockData.shortStats}/>
									</Col>
								</Row>
								<Row>
									<Col>
										<PieWidget pieSize={243} data={mockData.pieData} divId='catparts' />
									</Col>
								</Row>
							</Col>
							<Col lg='4'>
								<RatingWidget data={mockData.ratingData}/>
							</Col>
						</Row>
						<Row>
							<Col>
								<TableWidget data={mockData.table} />
							</Col>
						</Row>
						<Row>
							<Col>
								<ChoiseCat items={mockData.cats} activeCat={activeCat}  onClick={(value)=>{setActiveCat(value)}}/>
							</Col>
						</Row>
						<Row>
							<Col lg='8'>
								<CatStats label={activeCat} data={mockData.shortStats}/>
							</Col>
							<Col>
							</Col>
						</Row>
						<Row>
							<Col lg='4'>
								<CountryRating data={mockData.countryRating} label='Рейтинг экспортеров товара' />
							</Col>
							<Col lg='4'>
								<CountryRating data={mockData.countryRating} label='Рейтинг импортеров товара' />
							</Col>
							<Col lg='4'>
								<PieWidgetSmall pieSize={250} data={mockData.pieData} divId='importerparts' />
							</Col>
						</Row>
						<Row>
							<Col>
								<PlotWidget data={mockData.plot} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Theme>
	);
}

export default App;
