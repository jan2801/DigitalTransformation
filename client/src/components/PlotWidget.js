import { Card } from '@consta/uikit/Card';
import Plot from 'react-plotly.js';


const styles = {
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
	},
}

function PlotWidget(props) {
	return <Card shadow={false} border style={styles.card}>
		<Plot
			data={[
				{
					x: props.data['Экспорт'].x,
					y: props.data['Экспорт'].y,
					type: 'scatter',
					mode: 'lines+markers',
					marker: {size: 12, symbol: 'square', color: '#EC5F5F'},
					name: 'Экспорт',
				},
				{
					x: props.data['Импорт'].x,
					y: props.data['Импорт'].y,
					type: 'scatter',
					mode: 'lines+markers',
					marker: {size: 12, symbol: 'square', color: '#5EBDF3'},
					name: 'Импорт',
				},
			]}
			layout={ {
				width: 1366, 
				height: 387,
				margin: {
					l: 30,
					r: 30,
					b: 30,
					t: 30,
					pad: 4
				},
				xaxis: {
					showgrid: true,
					zeroline: true,
					showline: true,
					linecolor: 'rgba(0, 65, 102, 0.2)',
				},
				yaxis: {
					showgrid: true,
					zeroline: true,
					showline: true,
					linecolor: 'rgba(0, 65, 102, 0.2)',
				},
				showlegend: true,
				legend: {
					x: 0,
					xanchor: 'left',
					y: 1.1,
					orientation: 'h'
				}
			}}
		/>
	</Card>
}

export default PlotWidget;