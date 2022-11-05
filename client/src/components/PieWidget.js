import { Card } from '@consta/uikit/Card';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import * as d3 from 'd3';

const styles = {
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		paddingTop: '62px',
		paddingBottom: '55px',
		paddingLeft: '85px',
		paddingRight: '20px',
	},
	pie: {
		width: 243,
		height: 243,
	},
	label: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '10px',
		color: '#000000',
	},
	legendItem: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '0px',
		gap: '4px',
		flex: 'none',
		order: '2',
		alignSelf: 'stretch',
		flexGrow: '0',
	},
	legendGroup: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '4px 0px',
	}
};

function PieWidget(props) {
	const pieSize = props.pieSize;
	useEffect(()=>{
		document.getElementById(props.divId).innerHTML = '';
		// append the svg object to the div called 'my_dataviz'
		const svg = d3.select(`#${props.divId}`)
		.append("svg")
		.attr("width", pieSize)
		.attr("height", pieSize)
		.append("g")
		.attr("transform", `translate(${pieSize / 2},${pieSize / 2})`);

		// Create dummy data
		const data = props.data;

		// set the color scale
		const color = d3.scaleOrdinal()
		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

		// Compute the position of each group on the pie:
		const pie = d3.pie()
		.value(d=>d[1])

		const data_ready = pie(Object.entries(data))

		// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
		svg
		.selectAll('whatever')
		.data(data_ready)
		.join('path')
		.attr('d', d3.arc()
		.innerRadius(pieSize/4)         // This is the size of the donut hole
		.outerRadius(pieSize/2)
		)
		.attr('fill', d => color(d.data[0]))
		.attr("stroke", "white")
		.style("stroke-width", "3px")
		.style("opacity", 0.7)
	}, []);
	return (
		<Card shadow={false} border style={styles.card}>
			<Row>
				<Col lg='4'>
					<div id={props.divId}></div>
				</Col>
				<Col lg='8' styles={styles.legendGroup}>
					{
						Object.keys(props.data).map(function(key, index) {
							return <div style={styles.legendItem}><div>o</div><div style={styles.label}>{key}</div></div>
						})
					}
				</Col>
			</Row>
		</Card>
	)
}

export default PieWidget;