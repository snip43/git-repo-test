import DialogItemContainer from './DialogItemContainer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogData:  state.dialogsPage.dialogData
	}
}

let NewDialogContainer = connect (mapStateToProps)(DialogItemContainer)

export default NewDialogContainer;