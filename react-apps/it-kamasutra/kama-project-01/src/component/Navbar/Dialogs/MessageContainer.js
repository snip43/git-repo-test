import MessageBox from './MessageBox';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		messageData: state.dialogsPage.messageData
	}
}

const MessageContainer = connect(mapStateToProps)(MessageBox);

export default MessageContainer;