import { Card } from '@consta/uikit/Card';
import { useEffect, useState } from 'react';
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
		padding: '4px 0px',
		alignSelf: 'center',
	}
};

function PieWidget(props) {
	const color = d3.scaleOrdinal(d3.schemeCategory10);
	const pieSize = props.pieSize;
	useEffect(()=>{
		const angles = [];
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
		const color = d3.scaleOrdinal(d3.schemeCategory10)
		//.range(["#a05d56", "#EB5757", "#22C38E", "#56B9F2", "#98abc5"])
		// Compute the position of each group on the pie:
		const pie = d3.pie()
		.value(d=>d[1])
		console.log(data)
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
		.attr('fill', d => {
			angles.push(0.5*(d.startAngle+d.endAngle));
			console.log(angles);
			return color(d.data[0])
		})
		.attr("stroke", "white")
		.style("stroke-width", "3px")
		.style("opacity", 0.7)
		for (let i=0; i<angles.length; i++) {
			const div = document.createElement('div');
			div.innerHTML = Object.values(data)[i];
			div.style.position = 'absolute';
			div.style.top = `${pieSize/2 - 3*pieSize/8*Math.cos(angles[i])-10}px`;
			div.style.left = `${pieSize/2 + 3*pieSize/8*Math.sin(angles[i])-10}px`;
			div.style.fontFamily = 'Inter';
			div.style.fontStyle= 'normal';
			div.style.fontWeight= '400';
			div.style.fontSize= '18px';
			div.style.lineHeight= '18px';
			div.style.color= '#FFFFFF';
			document.getElementById(props.divId).appendChild(div);
		}
	}, []);
	return (
		<Card shadow={false} border style={styles.card}>
			<Row>
				<Col lg='4'>
					<div id={props.divId} style={{position: 'relative'}}>
					</div>
				</Col>
				<Col lg='8' style={styles.legendGroup}>
					{
						Object.keys(props.data).map(function(key, index) {
							return <div style={styles.legendItem}><div style={{
								width: '10px',
								height: '10px',
								background: color(index),
							}}></div><div style={styles.label}>{key}</div></div>
						})
					}
				</Col>
			</Row>
		</Card>
	)
}

export default PieWidget;