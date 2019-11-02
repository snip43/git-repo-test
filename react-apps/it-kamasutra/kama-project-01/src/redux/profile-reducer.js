const aTypeAddPost = 'ADD-POST';
const aTypeUpdatePostText = 'UPDATE-POST-TEXT';

let initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:20},
		{id:2, value:'Двадцать пятое', likeCount:1}
	],
	newPostText: ''
}

const profileReducer = (state = initinalState,action) => {
	switch(action.type) {
		case aTypeAddPost: 
		let PostText = state.newPostText;
			let newPost = { 
				id:3,
				value: PostText,
				likeCount: 0} ;
			
				return {
					...state,
					postsData: [...state.postsData,newPost],
					newPostText: ''
				}
					
		case aTypeUpdatePostText:
			return {
				...state,
				newPostText: action.newText
			}
			
		 default:
				return state;
			}
}

export const aCreatorAddPost = () => ({ type: aTypeAddPost });
export const aCreatorUpdatePostText = (text) => ({ type: aTypeUpdatePostText, newText: text });

export default profileReducer;