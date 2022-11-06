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
import Profile from './components/Profile';
import Login from './components/Login';
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
			rows: [
				{
					id: '01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ',
					period: 'АВГ 2021',
					country: 'США',
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
	},
	shortStats: [
		{label: 'Затрачено на импорт', value: 12666666}, 
		{label: 'Заработано на экспорте', value: 12000000},
		{label: 'Отношение импорта и экспорта', value: 24},
	],
	pieData: {
		'01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ': 40,
		'26-РУДЫ, ШЛАК И ЗОЛА': 25,
		'27-ТОПЛИВО МИНЕРАЛЬНОЕ, НЕФТЬ И ПРОДУКТЫ ИХ ПЕРЕГОНКИ; БИТУМИНОЗНЫЕ ВЕЩЕСТВА; ВОСКИ МИНЕРАЛЬНЫЕ': 13,
		'02-ШТ-ЖИВЫЕ ЖИВОТНЫЕ': 12,
		'Другое': 5,
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
			'Флаг': 'NO',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'NO',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'NO',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'NO',
			'тыс. долл.': 930567,
			'кг.': 30567,
			'тыс. долл./кг.': 567,
		},
		{
			'Страна': 'Норвегия',
			'Флаг': 'NO',
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
		privelage: true,
		requests: [
			{
				date: '06 ноября 2022',
				time: '15:04',
				start: {label: 'Все время', id: '1'},
				end: {label: 'Все время', id: '1'},
				country: {label:"Все страны",code:"ALL"},
				subject: {code: '00000', label: 'Все субъекты'},
				level: {label: '1', id: '1'},
				cat: null,
			},
			{
				date: '06 ноября 2022',
				time: '15:04',
				start: {label: 'май 2021', id: '1'},
				end: {label: 'март 2022', id: '1'},
				country: {label:"Все страны",code:"ALL"},
				subject: {code: '00000', label: 'Все субъекты'},
				level: {label: '1', id: '1'},
				cat: null,
			}
		]
	}
}

const countries=[
	{'code': 'ALL', 'name': 'Все страны'},
	{'code': 'AB', 'name': 'АБХАЗИЯ'}, 
	{'code': 'AU', 'name': 'АВСТРАЛИЯ'}, 
	{'code': 'AT', 'name': 'АВСТРИЯ'}, {'code': 'AZ', 'name': 'АЗЕРБАЙДЖАН'}, {'code': 'AL', 'name': 'АЛБАНИЯ'}, {'code': 'DZ', 'name': 'АЛЖИР'}, {'code': 'AS', 'name': 'АМЕРИКАНСКОЕ САМОА'}, {'code': 'Al', 'name': 'АНГИЛЬЯ'}, {'code': 'АО', 'name': 'АНГОЛА'}, {'code': 'AD', 'name': 'АНДОРРА'}, {'code': 'AQ', 'name': 'АНТАРКТИДА'}, {'code': 'AG', 'name': 'АНТИГУА И БАРБУДА'}, {'code': 'AR', 'name': 'АРГЕНТИНА'}, {'code': 'AM', 'name': 'АРМЕНИЯ'}, {'code': 'AW', 'name': 'АРУБА'}, {'code': 'AF', 'name': 'АФГАНИСТАН'}, {'code': 'BS', 'name': 'БАГАМЫ'}, {'code': 'BD', 'name': 'БАНГЛАДЕШ'}, {'code': 'BB', 'name': 'БАРБАДОС'}, {'code': 'BH', 'name': 'БАХРЕЙН'}, {'code': 'BY', 'name': 'БЕЛАРУСЬ'}, {'code': 'BZ', 'name': 'БЕЛИЗ'}, {'code': 'BE', 'name': 'БЕЛЬГИЯ'}, 
	{'code': 'BJ', 'name': 'БЕНИН'}, {'code': 'BM', 'name': 'БЕРМУДЫ'}, {'code': 'BG', 'name': 'БОЛГАРИЯ'}, {'code': 'ВО', 'name': 'БОЛИВИЯ, МНОГОНАЦИОНАЛ. ГОСУДАРСТВО'}, {'code': 'BQ', 'name': 'БОНЕЙР, СИНТ-ЭСТАТИУС И САБА'}, {'code': 'BA', 'name': 'БОСНИЯ И ГЕРЦЕГОВИНА'}, {'code': 'BW', 'name': 'БОТСВАНА'}, {'code': 'BR', 'name': 'БРАЗИЛИЯ'}, {'code': 'IO', 'name': 'БРИТАНСКАЯ ТЕРРИТОРИЯ В ИНД. ОКЕАНЕ'}, {'code': 'BN', 'name': 'БРУНЕЙ-ДАРУССАЛАМ'}, {'code': 'BV', 'name': 'БУВЕ'}, {'code': 'BF', 'name': 'БУРКИНА-ФАСО'}, {'code': 'Bl', 'name': 'БУРУНДИ'}, 
	{'code': 'BT', 'name': 'БУТАН'}, {'code': 'VU', 'name': 'ВАНУАТУ'}, {'code': 'HU', 'name': 'ВЕНГРИЯ'}, 
	{'code': 'VE', 'name': 'ВЕНЕСУЭЛА, БОЛИВИВА РИАНСКАЯ РЕСПУБЛИКА'}, {'code': 'VG', 'name': 'ВИРГИНСКИЕ ОСТРОВА, БРИТАНСКИЕ'}, 
	{'code': 'VI', 'name': 'ВИРГИНСКИЕ ОСТРОВА, США'}, {'code': 'VN', 'name': 'ВЬЕТНАМ'}, {'code': 'GA', 'name': 'ГАБОН'}, {'code': 'HT', 'name': 'ГАИТИ'}, 
	{'code': 'GY', 'name': 'ГАЙАНА'}, {'code': 'GM', 'name': 'ГАМБИЯ'}, {'code': 'GH', 'name': 'ГАНА'}, {'code': 'GP', 'name': 'ГВАДЕЛУПА'}, 
	{'code': 'GT', 'name': 'ГВАТЕМАЛА'}, {'code': 'GN', 'name': 'ГВИНЕЯ'}, {'code': 'GW', 'name': 'ГВИНЕЯ-БИСАУ'}, {'code': 'DE', 'name': 'ГЕРМАНИЯ'}, 
	{'code': 'GG', 'name': 'ГЕРНСИ'}, {'code': 'Gl', 'name': 'ГИБРАЛТАР'}, {'code': 'HN', 'name': 'ГОНДУРАС'}, {'code': 'HK', 'name': 'ГОНКОНГ'}, 
	{'code': 'GD', 'name': 'ГРЕНАДА'}, {'code': 'GL', 'name': 'ГРЕНЛАНДИЯ'}, {'code': 'GR', 'name': 'ГРЕЦИЯ'}, {'code': 'GE', 'name': 'ГРУЗИЯ'}, 
	{'code': 'GU', 'name': 'ГУАМ'}, {'code': 'DK', 'name': 'ДАНИЯ'}, {'code': 'JE', 'name': 'ДЖЕРСИ'}, {'code': 'DJ', 'name': 'ДЖИБУТИ'}, 
	{'code': 'DM', 'name': 'ДОМИНИКА'}, {'code': 'DO', 'name': 'ДОМИНИКАНСКАЯ РЕСПУБЛИКА'}, {'code': 'EG', 'name': 'ЕГИПЕТ'}, 
	{'code': 'ZM', 'name': 'ЗАМБИЯ'}, {'code': 'EH', 'name': 'ЗАПАДНАЯ САХАРА'}, {'code': 'ZW', 'name': 'ЗИМБАБВЕ'}, {'code': 'IL', 'name': 'ИЗРАИЛЬ'}, 
	{'code': 'IN', 'name': 'ИНДИЯ'}, {'code': 'ID', 'name': 'ИНДОНЕЗИЯ'}, {'code': 'JO', 'name': 'ИОРДАНИЯ'}, {'code': 'IQ', 'name': 'ИРАК'}, 
	{'code': 'IR', 'name': 'ИРАН, ИСЛАМСКАЯ РЕСПУБЛИКА'}, {'code': 'IE', 'name': 'ИРЛАНДИЯ'}, {'code': 'IS', 'name': 'ИСЛАНДИЯ'}, {'code': 'ES', 'name': 'ИСПАНИЯ'}, 
	{'code': 'IT', 'name': 'ИТАЛИЯ'}, {'code': 'YE', 'name': 'ЙЕМЕН'}, {'code': 'CV', 'name': 'КАБО-ВЕРДЕ'}, {'code': 'KZ', 'name': 'КАЗАХСТАН'}, 
	{'code': 'KH', 'name': 'КАМБОДЖА'}, {'code': 'CM', 'name': 'КАМЕРУН'}, {'code': 'CA', 'name': 'КАНАДА'}, {'code': 'QA', 'name': 'КАТАР'}, 
	{'code': 'KE', 'name': 'КЕНИЯ'}, {'code': 'CY', 'name': 'КИПР'}, {'code': 'KG', 'name': 'КЫРГЫЗСТАН'}, {'code': 'Kl', 'name': 'КИРИБАТИ'}, 
	{'code': 'CN', 'name': 'КИТАЙ'}, {'code': 'CC', 'name': 'КОКОСОВЫЕ (КИЛИНГ) ОСТРОВА'}, {'code': 'CO', 'name': 'КОЛУМБИЯ'}, {'code': 'KM', 'name': 'КОМОРЫ'}, 
	{'code': 'CG', 'name': 'КОНГО'}, {'code': 'CD', 'name': 'КОНГО, ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА'}, {'code': 'KP', 'name': 'КОРЕЯ, НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА'}, 
	{'code': 'KR', 'name': 'КОРЕЯ, РЕСПУБЛИКА'}, {'code': 'CR', 'name': 'КОСТА-РИКА'}, {'code': 'CI', 'name': 'КОТ-\'ДИВУАР'}, {'code': 'CU', 'name': 'КУБА'}, 
	{'code': 'KW', 'name': 'КУВЕЙТ'}, {'code': 'CW', 'name': 'КЮРАСАО'}, {'code': 'LA', 'name': 'ЛАОС'}, {'code': 'LV', 'name': 'ЛАТВИЯ'}, 
	{'code': 'LS', 'name': 'ЛЕСОТО'}, {'code': 'LR', 'name': 'ЛИБЕРИЯ'}, {'code': 'LB', 'name': 'ЛИВАН'}, {'code': 'LY', 'name': 'ЛИВИЯ'}, 
	{'code': 'LT', 'name': 'ЛИТВА'}, {'code': 'LI', 'name': 'ЛИХТЕНШТЕЙН'}, {'code': 'LU', 'name': 'ЛЮКСЕМБУРГ'}, {'code': 'MU', 'name': 'МАВРИКИЙ'}, 
	{'code': 'MR', 'name': 'МАВРИТАНИЯ'}, {'code': 'MG', 'name': 'МАДАГАСКАР'}, {'code': 'YT', 'name': 'МАЙОТТА'}, {'code': 'MO', 'name': 'МАКАО'}, 
	{'code': 'MW', 'name': 'МАЛАВИ'}, {'code': 'MY', 'name': 'МАЛАЙЗИЯ'}, {'code': 'ML', 'name': 'МАЛИ'}, {'code': 'UM', 'name': 'МАЛЫЕ ТИХООКЕАНСКИЕ ОСТРОВА (США)'}, 
	{'code': 'MV', 'name': 'МАЛЬДИВЫ'}, {'code': 'MT', 'name': 'МАЛЬТА'}, {'code': 'MA', 'name': 'МАРОККО'}, {'code': 'MQ', 'name': 'МАРТИНИКА'}, 
	{'code': 'МН', 'name': 'МАРШАЛЛОВЫ ОСТРОВА'}, {'code': 'MX', 'name': 'МЕКСИКА'}, {'code': 'FM', 'name': 'МИКРОНЕЗИЯ, ФЕДЕРАТИВНЫЕ ШТАТЫ'}, 
	{'code': 'MZ', 'name': 'МОЗАМБИК'}, {'code': 'MD', 'name': 'МОЛДОВА, РЕСПУБЛИКА'}, {'code': 'MC', 'name': 'МОНАКО'}, {'code': 'MN', 'name': 'МОНГОЛИЯ'}, 
	{'code': 'MS', 'name': 'МОНТСЕРРАТ'}, {'code': 'MM', 'name': 'МЬЯНМА'}, {'code': 'NA', 'name': 'НАМИБИЯ'}, {'code': 'NR', 'name': 'НАУРУ'}, 
	{'code': 'NP', 'name': 'НЕПАЛ'}, {'code': 'NE', 'name': 'НИГЕР'}, {'code': 'NG', 'name': 'НИГЕРИЯ'}, {'code': 'NL', 'name': 'НИДЕРЛАНДЫ'}, 
	{'code': 'Nl', 'name': 'НИКАРАГУА'}, {'code': 'NU', 'name': 'НИУЭ'}, {'code': 'NZ', 'name': 'НОВАЯ ЗЕЛАНДИЯ'}, {'code': 'NC', 'name': 'НОВАЯ КАЛЕДОНИЯ'}, 
	{'code': 'NO', 'name': 'НОРВЕГИЯ'}, {'code': 'AE', 'name': 'ОБЪЕДИНЕННЫЕ АРАБСКИЕ ЭМИРАТЫ'}, {'code': 'OM', 'name': 'ОМАН'}, {'code': 'IM', 'name': 'ОСТРОВ МЭН'}, 
	{'code': 'NF', 'name': 'ОСТРОВ НОРФОЛК'}, {'code': 'CX', 'name': 'ОСТРОВ РОЖДЕСТВА'}, {'code': 'HM', 'name': 'ОСТРОВА ХЕРД И ОСТРОВА МАКДОНАЛЬД'}, 
	{'code': 'KY', 'name': 'ОСТРОВА КАЙМАН'}, {'code': 'CK', 'name': 'ОСТРОВА КУКА'}, {'code': 'ТС', 'name': 'ОСТРОВА ТЕРКС И КАЙКОС'}, 
	{'code': 'PK', 'name': 'ПАКИСТАН'}, {'code': 'PW', 'name': 'ПАЛАУ'}, {'code': 'PS', 'name': 'ПАЛЕСТИНА, ГОСУДАРСТВО'}, {'code': 'PA', 'name': 'ПАНАМА'}, 
	{'code': 'VA', 'name': 'ПАПСКИЙ ПРЕСТОЛ (ГОС. ГОРОД ВАТИКАН)'}, {'code': 'PG', 'name': 'ПАПУА-НОВАЯ ГВИНЕЯ'}, {'code': 'PY', 'name': 'ПАРАГВАЙ'}, 
	{'code': 'PE', 'name': 'ПЕРУ'}, {'code': 'PN', 'name': 'ПИТКЕРН'}, {'code': 'PL', 'name': 'ПОЛЬША'}, {'code': 'PT', 'name': 'ПОРТУГАЛИЯ'}, 
	{'code': 'PR', 'name': 'ПУЭРТО-РИКО'}, {'code': 'MK', 'name': 'РЕСПУБЛИКА МАКЕДОНИЯ'}, {'code': 'RE', 'name': 'РЕЮНЬОН'}, {'code': 'RW', 'name': 'РУАНДА'},
	{'code': 'RO', 'name': 'РУМЫНИЯ'}, {'code': 'WS', 'name': 'САМОА'}, {'code': 'SM', 'name': 'САН-МАРИНО'}, {'code': 'ST', 'name': 'САН-ТОМЕ И ПРИНСИПИ'}, 
	{'code': 'SA', 'name': 'САУДОВСКАЯ АРАВИЯ'}, {'code': 'SZ', 'name': 'СВАЗИЛЕНД'}, {'code': 'SH', 'name': 'СВ.ЕЛЕНА, О.ВОЗНЕСЕНИЯ, ТР.-ДА-КУНЬЯ'}, 
	{'code': 'MP', 'name': 'СЕВЕРНЫЕ МАРИАНСКИЕ ОСТРОВА'}, {'code': 'SC', 'name': 'СЕЙШЕЛЫ'}, {'code': 'BL', 'name': 'СЕН-БАРТЕЛЕМИ'}, 
	{'code': 'SN', 'name': 'СЕНЕГАЛ'}, {'code': 'MF', 'name': 'СЕН-МАРТЕН'}, {'code': 'SX', 'name': 'СЕН-МАРТЕН (НИДЕРЛАНДСКАЯ ЧАСТЬ)'}, 
	{'code': 'PM', 'name': 'СЕН-ПЬЕР И МИКЕЛОН'}, {'code': 'VC', 'name': 'СЕНТ-ВИНСЕНТ И ГРЕНАДИНЫ'}, {'code': 'KN', 'name': 'СЕНТ-КИТС И НЕВИС'}, 
	{'code': 'LC', 'name': 'СЕНТ-ЛЮСИЯ'}, {'code': 'RS', 'name': 'СЕРБИЯ'}, {'code': 'SG', 'name': 'СИНГАПУР'}, {'code': 'SY', 'name': 'СИРИЙСКАЯ АРАБСКАЯ РЕСПУБЛИКА'}, 
	{'code': 'SK', 'name': 'СЛОВАКИЯ'}, {'code': 'Sl', 'name': 'СЛОВЕНИЯ'}, {'code': 'GB', 'name': 'СОЕДИНЕННОЕ КОРОЛЕВСТВО'}, {'code': 'US', 'name': 'СОЕДИНЕННЫЕ ШТАТЫ'}, {'code': 'SB', 'name': 'СОЛОМОНОВЫ ОСТРОВА'}, {'code': 'SO', 'name': 'СОМАЛИ'}, {'code': 'SD', 'name': 'СУДАН'}, {'code': 'SR', 'name': 'СУРИНАМ'}, {'code': 'SL', 'name': 'СЬЕРРА-ЛЕОНЕ'}, {'code': 'TJ', 'name': 'ТАДЖИКИСТАН'}, {'code': 'TH', 'name': 'ТАИЛАНД'}, {'code': 'TW', 'name': 'ТАЙВАНЬ (КИТАЙ)'}, {'code': 'TZ', 'name': 'ТАНЗАНИЯ, ОБЪЕДИНЕННАЯ РЕСПУБЛИКА'}, {'code': 'TL', 'name': 'ТИМОР-ЛЕСТЕ'}, {'code': 'TG', 'name': 'ТОГО'}, {'code': 'TK', 'name': 'ТОКЕЛАУ'}, {'code': 'TO', 'name': 'ТОНГА'}, {'code': 'TT', 'name': 'ТРИНИДАД И ТОБАГО'}, {'code': 'TV', 'name': 'ТУВАЛУ'}, {'code': 'TN', 'name': 'ТУНИС'}, {'code': 'TM', 'name': 'ТУРКМЕНИЯ'}, {'code': 'TR', 'name': 'ТУРЦИЯ'}, {'code': 'UG', 'name': 'УГАНДА'}, {'code': 'UZ', 'name': 'УЗБЕКИСТАН'}, {'code': 'UA', 'name': 'УКРАИНА'}, {'code': 'WF', 'name': 'УОЛЛИС И ФУТУНА'}, {'code': 'UY', 'name': 'УРУГВАЙ'}, {'code': 'FO', 'name': 'ФАРЕРСКИЕ ОСТРОВА'}, {'code': 'FJ', 'name': 'ФИДЖИ'}, {'code': 'PH', 'name': 'ФИЛИППИНЫ'}, {'code': 'Fl', 'name': 'ФИНЛЯНДИЯ'}, {'code': 'FK', 'name': 'ФОЛКЛЕНДСКИЕ ОСТРОВА (МАЛЬВИНСКИЕ)'}, {'code': 'FR', 'name': 'ФРАНЦИЯ'}, {'code': 'GF', 'name': 'ФРАНЦУЗСКАЯ ГВИАНА'}, {'code': 'PF', 'name': 'ФРАНЦУЗСКАЯ ПОЛИНЕЗИЯ'}, {'code': 'TF', 'name': 'ФРАНЦУЗСКИЕ ЮЖНЫЕ ТЕРРИТОРИИ'}, {'code': 'HR', 'name': 'ХОРВАТИЯ'}, {'code': 'CF', 'name': 'ЦЕНТРАЛЬНО-АФРИКАНСКАЯ РЕСПУБЛИКА'}, {'code': 'TD', 'name': 'ЧАД'}, {'code': 'ME', 'name': 'ЧЕРНОГОРИЯ'}, {'code': 'CZ', 'name': 'ЧЕХИЯ'}, {'code': 'CL', 'name': 'ЧИЛИ'}, {'code': 'CH', 'name': 'ШВЕЙЦАРИЯ'}, {'code': 'SE', 'name': 'ШВЕЦИЯ'}, {'code': 'SJ', 'name': 'ШПИЦБЕРГЕН И ЯН-МАЙЕН'}, {'code': 'LK', 'name': 'ШРИ-ЛАНКА'}, {'code': 'ЕС', 'name': 'ЭКВАДОР'}, {'code': 'GQ', 'name': 'ЭКВАТОРИАЛЬНАЯ ГВИНЕЯ'}, {'code': 'АХ', 'name': 'ЭЛАНДСКИЕ ОСТРОВА'}, {'code': 'SV', 'name': 'ЭЛЬ-САЛЬВАДОР'}, {'code': 'ER', 'name': 'ЭРИТРЕЯ'}, {'code': 'ЕЕ', 'name': 'ЭСТОНИЯ'}, {'code': 'ET', 'name': 'ЭФИОПИЯ'}, {'code': 'GS', 'name': 'ЮЖН. ДЖОРДЖИЯ И ЮЖН. САНДВИЧ. ОСТРОВА'}, {'code': 'ZA', 'name': 'ЮЖНАЯ АФРИКА'}, {'code': 'OS', 'name': 'ЮЖНАЯ ОСЕТИЯ'}, {'code': 'SS', 'name': 'ЮЖНЫЙ СУДАН'}, {'code': 'JM', 'name': 'ЯМАЙКА'}, {'code': 'JP', 'name': 'ЯПОНИЯ'}
];

const subjects=[{'code': 0, 'name': 'Все субъекты'},
	{'code': 80000, 'name': 'РЕСПУБЛИКА БАШКОРТОСТАН'}, {'code': 88000, 'name': 'РЕСПУБЛИКА МАРИЙ ЭЛ'}, 
	{'code': 67000, 'name': 'СЕВАСТОПОЛЬ - ГОРОД ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ'}, {'code': 18000, 'name': 'ВОЛГОГРАДСКАЯ ОБЛАСТЬ'}, 
	{'code': 90000, 'name': 'РЕСПУБЛИКА СЕВЕРНАЯ ОСЕТИЯ-АЛАНИЯ'}, {'code': 84000, 'name': 'РЕСПУБЛИКА АЛТАЙ'}, 
	{'code': 26000, 'name': 'РЕСПУБЛИКА ИНГУШЕТИЯ'}, {'code': 69000, 'name': 'ТОМСКАЯ ОБЛАСТЬ'}, {'code': 56000, 'name': 'ПЕНЗЕНСКАЯ ОБЛАСТЬ'}, 
	{'code': 73000, 'name': 'УЛЬЯНОВСКАЯ ОБЛАСТЬ'}, {'code': 11100, 'name': 'НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ (АРХАНГЕЛЬСКАЯ ОБЛАСТЬ)'}, 
	{'code': 3000, 'name': 'КРАСНОДАРСКИЙ КРАЙ'}, {'code': 75000, 'name': 'ЧЕЛЯБИНСКАЯ ОБЛАСТЬ'}, {'code': 12000, 'name': 'АСТРАХАНСКАЯ ОБЛАСТЬ'}, 
	{'code': 61000, 'name': 'РЯЗАНСКАЯ ОБЛАСТЬ'}, {'code': 33000, 'name': 'КИРОВСКАЯ ОБЛАСТЬ'}, {'code': 58000, 'name': 'ПСКОВСКАЯ ОБЛАСТЬ'}, 
	{'code': 79000, 'name': 'РЕСПУБЛИКА АДЫГЕЯ (АДЫГЕЯ)'}, {'code': 53000, 'name': 'ОРЕНБУРГСКАЯ ОБЛАСТЬ'}, {'code': 86000, 'name': 'РЕСПУБЛИКА КАРЕЛИЯ'}, 
	{'code': 19000, 'name': 'ВОЛОГОДСКАЯ ОБЛАСТЬ'}, {'code': 71100, 'name': 'ХАНТЫ-МАНСИЙСКИЙ АВТОНОМНЫЙ ОКРУГ (ТЮМЕНСКАЯ ОБЛАСТЬ)'}, 
	{'code': 64000, 'name': 'САХАЛИНСКАЯ ОБЛАСТЬ'}, {'code': 40000, 'name': 'ГОРОД САНКТ-ПЕТЕРБУРГ ГОРОД ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ'}, 
	{'code': 27000, 'name': 'КАЛИНИНГРАДСКАЯ ОБЛАСТЬ'}, {'code': 97000, 'name': 'ЧУВАШСКАЯ РЕСПУБЛИКА - ЧУВАШИЯ'}, 
	{'code': 50000, 'name': 'НОВОСИБИРСКАЯ ОБЛАСТЬ'}, {'code': 15000, 'name': 'БРЯНСКАЯ ОБЛАСТЬ'}, {'code': 10000, 'name': 'АМУРСКАЯ ОБЛАСТЬ'}, 
	{'code': 92000, 'name': 'РЕСПУБЛИКА ТАТАРСТАН (ТАТАРСТАН)'}, {'code': 28000, 'name': 'ТВЕРСКАЯ ОБЛАСТЬ'}, {'code': 85000, 'name': 'РЕСПУБЛИКА КАЛМЫКИЯ'}, 
	{'code': 70000, 'name': 'ТУЛЬСКАЯ ОБЛАСТЬ'}, {'code': 14000, 'name': 'БЕЛГОРОДСКАЯ ОБЛАСТЬ'}, {'code': 77000, 'name': 'ЧУКОТСКИЙ АВТОНОМНЫЙ ОКРУГ'}, 
	{'code': 44000, 'name': 'МАГАДАНСКАЯ ОБЛАСТЬ'}, {'code': 81000, 'name': 'РЕСПУБЛИКА БУРЯТИЯ'}, {'code': 38000, 'name': 'КУРСКАЯ ОБЛАСТЬ'}, 
	{'code': 82000, 'name': 'РЕСПУБЛИКА ДАГЕСТАН'}, {'code': 71140, 'name': 'ЯМАЛО-НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ (ТЮМЕНСКАЯ ОБЛАСТЬ)'}, 
	{'code': 96000, 'name': 'ЧЕЧЕНСКАЯ РЕСПУБЛИКА'}, {'code': 22000, 'name': 'НИЖЕГОРОДСКАЯ ОБЛАСТЬ'}, {'code': 93000, 'name': 'РЕСПУБЛИКА ТЫВА'}, 
	{'code': 65000, 'name': 'СВЕРДЛОВСКАЯ ОБЛАСТЬ'}, {'code': 54000, 'name': 'ОРЛОВСКАЯ ОБЛАСТЬ'}, {'code': 11000, 'name': 'АРХАНГЕЛЬСКАЯ ОБЛАСТЬ'}, 
	{'code': 78000, 'name': 'ЯРОСЛАВСКАЯ ОБЛАСТЬ'}, {'code': 25000, 'name': 'ИРКУТСКАЯ ОБЛАСТЬ'}, {'code': 76000, 'name': 'ЗАБАЙКАЛЬСКИЙ КРАЙ'}, 
	{'code': 89000, 'name': 'РЕСПУБЛИКА МОРДОВИЯ'}, {'code': 52000, 'name': 'ОМСКАЯ ОБЛАСТЬ'}, {'code': 36000, 'name': 'САМАРСКАЯ ОБЛАСТЬ'}, 
	{'code': 91000, 'name': 'КАРАЧАЕВО-ЧЕРКЕССКАЯ РЕСПУБЛИКА'}, {'code': 99000, 'name': 'ЕВРЕЙСКАЯ АВТОНОМНАЯ ОБЛАСТЬ'}, 
	{'code': 94000, 'name': 'УДМУРТСКАЯ РЕСПУБЛИКА'}, {'code': 46000, 'name': 'МОСКОВСКАЯ ОБЛАСТЬ'}, {'code': 71000, 'name': 'ТЮМЕНСКАЯ ОБЛАСТЬ'}, 
	{'code': 49000, 'name': 'НОВГОРОДСКАЯ ОБЛАСТЬ'}, {'code': 57000, 'name': 'ПЕРМСКИЙ КРАЙ'}, {'code': 17000, 'name': 'ВЛАДИМИРСКАЯ ОБЛАСТЬ'}, 
	{'code': 35000, 'name': 'РЕСПУБЛИКА КРЫМ'}, {'code': 7000, 'name': 'СТАВРОПОЛЬСКИЙ КРАЙ'}, {'code': 32000, 'name': 'КЕМЕРОВСКАЯ ОБЛАСТЬ'}, 
	{'code': 66000, 'name': 'СМОЛЕНСКАЯ ОБЛАСТЬ'}, {'code': 29000, 'name': 'КАЛУЖСКАЯ ОБЛАСТЬ'}, {'code': 63000, 'name': 'САРАТОВСКАЯ ОБЛАСТЬ'}, 
	{'code': 37000, 'name': 'КУРГАНСКАЯ ОБЛАСТЬ'}, {'code': 8000, 'name': 'ХАБАРОВСКИЙ КРАЙ'}, {'code': 5000, 'name': 'ПРИМОРСКИЙ КРАЙ'}, 
	{'code': 1000, 'name': 'АЛТАЙСКИЙ КРАЙ'}, {'code': 60000, 'name': 'РОСТОВСКАЯ ОБЛАСТЬ'}, {'code': 42000, 'name': 'ЛИПЕЦКАЯ ОБЛАСТЬ'}, 
	{'code': 24000, 'name': 'ИВАНОВСКАЯ ОБЛАСТЬ'}, {'code': 20000, 'name': 'ВОРОНЕЖСКАЯ ОБЛАСТЬ'}, 
	{'code': 45000, 'name': 'ГОРОД МОСКВА СТОЛИЦА РОССИЙСКОЙ ФЕДЕРАЦИИ ГОРОД ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ'}, 
	{'code': 68000, 'name': 'ТАМБОВСКАЯ ОБЛАСТЬ'}, {'code': 95000, 'name': 'РЕСПУБЛИКА ХАКАСИЯ'}, 
	{'code': 87000, 'name': 'РЕСПУБЛИКА КОМИ'}, {'code': 83000, 'name': 'КАБАРДИНО-БАЛКАРСКАЯ РЕСПУБЛИКА'}, 
	{'code': 41000, 'name': 'ЛЕНИНГРАДСКАЯ ОБЛАСТЬ'}, {'code': 4000, 'name': 'КРАСНОЯРСКИЙ КРАЙ'}, 
	{'code': 47000, 'name': 'МУРМАНСКАЯ ОБЛАСТЬ'}, {'code': 30000, 'name': 'КАМЧАТСКИЙ КРАЙ'}, {'code': 98000, 'name': 'РЕСПУБЛИКА САХА (ЯКУТИЯ)'}, 
	{'code': 34000, 'name': 'КОСТРОМСКАЯ ОБЛАСТЬ'}
];

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


function sendRequest(url, postget, data, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open(postget, url);
	xhr.send();
	xhr.onload = function() {
		if (xhr.status !== 200) {
	  	} else {
			callback(xhr.status, xhr.response);
	  	}
	};
}

function App() {



	const [activeTab, setActiveTab] = useState('Логин');
	const [activeCat, setActiveCat] = useState('01-ШТ-ЖИВЫЕ ЖИВОТНЫЕ');
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [user, setUser] = useState(mockData.user);
	const [shortStats, setShortStats] = useState(mockData.shortStats);
	const [exportRating, setExportRating] = useState(mockData.countryRating);
	const [importRating, setImportRating] = useState(mockData.countryRating);

	const [filters, setFilters] = useState({
		start: {label: 'Все время', id: '1'},
		end: {label: 'Все время', id: '1'},
		country: {label:"Все страны",code:"ALL"},
		subject: {code: '00000', label: 'Все субъекты'},
		level: {label: '1', id: '1'},
		cat: null,
	});

	const clearFilters = ()=>{
		console.log('Чистим')
		setFilters({
			start: {label: 'Все время', id: '1'},
			end: {label: 'Все время', id: '1'},
			country: {label:"Все страны",code:"ALL"},
			subject: {code: '00000', label: 'Все субъекты'},
			level: {label: '1', id: '1'},
			cat: null,
		});
		console.log(filters);
	};

	const setFilters2 = (filters)=>{
		let json = JSON.stringify(filters);
		sendRequest('load', 'POST', json, (status, res)=>{
			if (status===400) {
				console.log(res);
			}
		});
		// let files = [
		// 	'ex_35_all_DE_topregions.csv',
		// 	'im_35_all_DE_topregions.csv',
		// 	'im_35_46000_МОСКОВСКАЯ_ОБЛАСТЬ_DE_topcountryes.csv',
		// 	'ex_35_46000_МОСКОВСКАЯ_ОБЛАСТЬ_DE_topcountryes.csv',
		// ];

		// for (const file of files) {
		// 	let filename = file.split('_');
			
		// 	sendRequest(file, {}, (status, res)=>{
		// 		let rows = res.split('\r\n');
		// 		if (filename[0]==='ex' && filename[2]==='all' && filename[3]!=='all') {
		// 			let data = [];
		// 			for (let i=1; i<6; i++) {
		// 				try {
		// 					data.push({
		// 						'Страна': rows[i].split(',')[0].split(' - ')[1],
		// 						'Флаг': 'RU',
		// 						'тыс. долл.': parseInt(rows[i].split(',')[1]),
		// 						'кг.': 0,
		// 						'тыс. долл./кг.': 0,
		// 					});
		// 				} catch {}
		// 			}
		// 			console.log(data);
		// 			setExportRating(data);
		// 		}
		// 		if (filename[filename.length-1]==='topregions' && filename[0]==='im') {
		// 			let data = [];
		// 			for (let i=1; i<6; i++) {
		// 				try {
		// 					data.push({
		// 						'Страна': rows[i].split(',')[0].split(' - ')[1],
		// 						'Флаг': 'RU',
		// 						'тыс. долл.': parseInt(rows[i].split(',')[1]),
		// 						'кг.': 0,
		// 						'тыс. долл./кг.': 0,
		// 					});
		// 				} catch {}
		// 			}
		// 			console.log(data);
		// 			setImportRating(data);
		// 		}
		// 	})
		// }
	}

	const setRequest = (filters)=>{
		setActiveTab('Дашборд');
		setFilters(filters);
		console.log(JSON.stringify(filters));
	}

	const sendLoginRequest = (login, password)=>{
		console.log(login, password);
		sendRequest('login', 'POST', {
			login: login,
			password: password,
		}, (status, res)=>{
			if (status===400) {
				setActiveTab('Дашборд');
			}
		})
	}

	const logout = ()=>{
		setActiveTab('Логин');
	}
	
	return (
		<Theme preset={presetGpnDefault} style={{height: '100%'}}>
			<Container fluid style={styles.container}>
				{activeTab==='Дашборд'||activeTab==='Профиль' ?
				<Row style={{width: '100%', margin: '0px'}}>
					<Header openProfile={()=>{setSideBarOpen(!sideBarOpen)}} setActiveTab={setActiveTab} activeTab={activeTab} logout={logout} user={user} />
				</Row> : <div></div>
				}		
				{activeTab==='Дашборд' ?
					<Row style={{height: 'Calc(100% - 64px)', width: '100%', margin: '0px'}}>
						<Col lg='3' style={styles.leftBar}>
							<Sidebar setFilters={setFilters2} countries={countries} subjects={subjects} filters={filters} clearFilters={clearFilters} />
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
											<ShortStats data={shortStats}/>
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
									<CountryRating data={exportRating} label='Рейтинг экспортеров товара' />
								</Col>
								<Col lg='4'>
									<CountryRating data={importRating} label='Рейтинг импортеров товара' />
								</Col>
								<Col lg='4'>
									<PieWidgetSmall pieSize={200} data={mockData.pieData} divId='importerparts' />
								</Col>
							</Row>
							<Row>
								<Col>
									<PlotWidget data={mockData.plot} />
								</Col>
							</Row>
						</Col>
					</Row>
				: <div></div>
				}
				{
					activeTab==='Профиль' ?
					<div>
						<Profile user={mockData.user} goToDashboard={()=>{setActiveTab('Дашборд')}} setFilters={setRequest} />
					</div> : <div></div>
				}
				{
					activeTab==='Логин' ?
					<div>
						<Login sendLoginRequest={sendLoginRequest} />
					</div> : <div></div>
				}
			</Container>
		</Theme>
	);
}

export default App;
