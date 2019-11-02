const aTypeFollow = 'FOLLOW';
const aTypeUnFollow = 'UNFOLLOW';

let initinalState = {
	usersData:[
		{
			id:1, 
			avatar: 'https://i.ytimg.com/vi/CD6wLmLTbSk/sddefault.jpg',
			name:'Хрюндик',
			follow: true,
			followMessage: 'go for me',
			country: 'Russia',
			city: 'Kirov'
		},
		{
			id:2, 
			avatar:'https://avatars.mds.yandex.net/get-pdb/1627222/754a4257-a39f-4c56-8a04-ec365d79a2a6/s1200?webp=false',
			name:'Кукушка',
			follow: true,
			followMessage: 'хочу новых знакомств',
			country: 'Russia',
			city: 'Moscow'
		},
		{
			id:3, 
			avatar:'https://img2.goodfon.ru/original/1920x1372/6/61/sochi-olimpiada-2014-zima.jpg',
			name:'Черепок',
			follow: false,
			followMessage: 'го на лыжи',
			country: 'Finland',
			city: 'Хельсинки'
		}	
	]

}

const findUsersReducers = (state = initinalState,action) => {
	switch(action.type) {
		case aTypeFollow : 
			return {
				...state,
				usersData: [{
					...state.usersData,
					follow:false
				}]
				
		}
		case aTypeUnFollow : 
			return {
				...state,
				usersData: [{
					...state.usersData,
					follow:false
				}]
		}
		default:
		return state;
		
	}
}

export const aCreatorFollow = () => ({ type: aTypeFollow });
export const aCreatorUnFollow = () => ({ type: aTypeUnFollow });

export default findUsersReducers;