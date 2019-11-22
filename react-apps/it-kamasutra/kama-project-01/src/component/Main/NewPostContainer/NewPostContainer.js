import {connect} from 'react-redux';
import {compose} from 'redux';
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


	const NewPostContainer = compose(
		connect(mapStateToProps, mapDispatchToProps)
		)(NewPost);

export default NewPostContainer;
	

