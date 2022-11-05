import { Table } from '@consta/uikit/Table';
import { Card } from '@consta/uikit/Card';


const styles = {
	card: {
		marginTop: '10px',
		marginBottom: '10px',
		padding: '30px',
		height: '502px',
	},
}

function TableWidget(props) {
	return <Card style={styles.card} shadow={false} border>
		<Table rows={props.data['Импорт'].rows} columns={props.data['Импорт'].columns} borderBetweenColumns />
	</Card>
}

export default TableWidget;