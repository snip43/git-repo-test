import {connect} from 'react-redux';
import {aCreatorAddMessage,aCreatorUpdateMessageText} from '../../../../../redux/dialogs-reducer'
import NewMessage from '../NewMessage';

	const mapStateToProps = (state) => {
		return {
			newMessageText: state.dialogsPage.newMessageText
		}
	}
	const mapDispatchToProps = (dispatch) => {
		return {
			addMessageText: () => {
				dispatch(aCreatorAddMessage());
			},
			updateNewMessageText: (text) => {
					dispatch(aCreatorUpdateMessageText(text));
			}
		}
	}

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
	

