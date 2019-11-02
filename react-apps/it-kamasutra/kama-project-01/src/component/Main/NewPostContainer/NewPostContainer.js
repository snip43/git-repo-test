import {connect} from 'react-redux';
import NewPost from '../NewPost';
import {aCreatorAddPost,aCreatorUpdatePostText} from '../../../redux/profile-reducer';

	let mapStateToProps = (state) => {
		return {
			newPostText: state.profilePage.newPostText
		}
	}

	let mapDispatchToProps = (dispatch)=> {
		return {
			addPostOn: () => {
				dispatch(aCreatorAddPost());
			},
			updateNewPostTextOn: (text) =>{
				dispatch(aCreatorUpdatePostText(text));
			}
		}
	}

	const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
	

