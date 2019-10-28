import React from 'react';
import NewPost from '../NewPost';
import {aCreatorAddPost,aCreatorUpdatePostText} from '../../../redux/profile-reducer';


const NewPostContainer = (props) => {	
	let newPostText = props.state.newPostText;
	
	let addPost = () => {
		props.dispatch(aCreatorAddPost());
	}

	let updateNewPostText = (text) => {
		props.dispatch(aCreatorUpdatePostText(text));
	}

	return <NewPost 
						addPost={addPost} 
						updateNewPostText={updateNewPostText}
						newPostText={newPostText}
						/>
}

export default NewPostContainer;
	

