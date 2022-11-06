
const styles = {
	active: {
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#3173F2",
		padding: '8px 16px 8px 16px',
		background: '#E1EBFD',
		marginRight: '10px',
	},
	simple: {
		marginRight: '10px',
		padding: '8px 16px 8px 16px',
		fontFamily: "'Inter'",
		fontStyle: "normal",
		fontWeight: 600,
		fontSize: "16px",
		lineHeight: "19px",
		color: "#3173F2",
		border: "1px solid #0078D2", 
		borderRadius: "2px",
	},
	main: {
		display: 'flex',
		flexDirection: 'row',
		paddingTop: '30px',
		paddingBottom: '20px',
	},
}

function ChoiseCat(props) {
	console.log(props.onClick)
	return <div style={styles.main}>
		{
			props.items.map((item)=>{
				return <div style={item.value===props.activeCat ? styles.active: styles.simple} onClick={item.value!==props.activeCat? ()=>{props.onClick(item.value); console.log(1)}:()=>{}}>
					{item.label}
				</div>
			})
		}
	</div>
}

export default ChoiseCat;