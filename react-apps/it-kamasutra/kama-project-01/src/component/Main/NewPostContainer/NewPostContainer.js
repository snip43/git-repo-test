import {connect} from 'react-redux';
import NewPost from '../NewPost';
import {addPostOn,updateNewPostTextOn} from '../../../redux/profile-reducer';

	let mapStateToProps = (state) => {
		return {
			newPostText: state.profilePage.newPostText
		}
	}

	let mapDispatchToProps = {
			addPostOn,
			updateNewPostTextOn
			}


	const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
	

