const aTypeAddPost = 'ADD-POST';
const aTypeUpdatePostText = 'UPDATE-POST-TEXT';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_NEW_NAME_PROFILE = 'SET_NEW_NAME_PROFILE';
const SET_ABOUT_ME = 'SET_ABOUT_ME';
const SET_IS_LOOKING_FOR_JOB = 'SET_IS_LOOKING_FOR_JOB';
const SET_LOOKING_FOR_JOB_DESCRIPTION = 'SET_LOOKING_FOR_JOB_DESCRIPTION';

let initinalState = {
	postsData:[
		{id:1, value:'Первое',likeCount:20},
		{id:2, value:'Двадцать пятое', likeCount:1}
	],
	selfData:{
		myPhotosLarge: 'https://i.pinimg.com/originals/14/fb/fd/14fbfd63332378ea42542d89b00253e5.jpg',
			myBirthDay: '30.09.1987',
			myBirthCity: 'Kirov,Kirovskaya oblast`',
			myLiveCity: 'Moscow'
		},
	profileData: 
		{
		contacts: {
				facebook: 'test',
				website:'test',
				vk:'test',
				twitter:'test',
				instagram:'test',
				youtube:'test',
				github:'test',
				mainLink:'test'
			},
		photos: {
				large: 'test',
				small: 'test'
			},
		isLookingForJob: false,
		lookingForJobDescription: 'test',
		fullName: 'test test',
		userId: null,
		aboutMe: 'test',
		},
	newPostText: '',
}

const profileReducer = (state = initinalState,action) => {
	switch(action.type) {
		case aTypeAddPost: 
		let PostText = state.newPostText;
			let newPost = { 
				id:3,
				value: PostText,
				likeCount: 0
			} ;
			
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

		case SET_PHOTOS: 
		return {
			
			...state,
			profileData: {
					...state.profileData, 
					photos: {
						...state.profileData.photos, large: action.large
					} 
				}
		}
		case SET_NEW_NAME_PROFILE:
			return {
				...state,
				profileData: {
				...state.profileData,	fullName: action.fullName
				}
			}
		
			case SET_ABOUT_ME:
				return {
					...state, 
					profileData: {
						...state.profileData, aboutMe: action.aboutMe
					}
				}

			case SET_LOOKING_FOR_JOB_DESCRIPTION:
				return {
					...state,
					profileData: {
						...state.profileData, lookingForJobDescription: action.description
					}
				}

			case SET_IS_LOOKING_FOR_JOB:
				return {
					...state,
					profileData: {
						...state.profileData, isLookingForJob: action.isLookingForJob
					}
				}

			
		 default:
				return state;
			}
}

export const addPostOn = () => ({ type: aTypeAddPost });
export const updateNewPostTextOn = (text) => ({ type: aTypeUpdatePostText, newText: text });
export const setPhotosLargeProfile = (large) => ({ type: SET_PHOTOS, large });
export const setNameNewProfile = (fullName) => ({ type: SET_NEW_NAME_PROFILE, fullName });
export const setAboutMe = (aboutMe) => ({ type: SET_ABOUT_ME, aboutMe });
export const setIsLookingForJob = (isLookingForJob) => ({ type: SET_IS_LOOKING_FOR_JOB,isLookingForJob });
export const setLookingForJobDescription = (description) => ({ type: SET_LOOKING_FOR_JOB_DESCRIPTION, description });

export default profileReducer;