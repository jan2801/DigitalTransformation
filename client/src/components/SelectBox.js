import { useEffect, useState } from 'react';
import { Combobox } from '@consta/uikit/Combobox';

const styles = {
	selectBox: {
		//paddingTop: '20px',
	},
	label: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '17px',
		color: '#000000',
		paddingLeft: '10px',
		paddingBottom: '10px',
		paddingTop: '20px',
	},
}
function SelectBox(props) {
	const [value, setValue] = useState(props.value);
	return <div style={styles.selectBox}>
		<div style={styles.label}>{props.label}</div>
			<Combobox 
				items={props.items}
				value={value}
				size='m'
				onChange={({ value }) => {
					setValue(value);
					props.onChange(value);
				}}
				multiple={props.multiple}
			/>
		</div>
}

export default SelectBox;