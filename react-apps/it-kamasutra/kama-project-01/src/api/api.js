import Axios from 'axios';

const instance = Axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": '30b194fe-a29c-4e84-8557-90a9f7eb241f'
	}
})

export const usersAPI = {
	getUsersApi(currentPage = 1, pageSize = 10 ) {
		return	instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data 
			})
	},
	postFollow(id){
		return		instance.post(`follow/${id}`,{})
				.then(response => {
					return response.data;
				})
	},
	deleteFollow(id){
		return	instance.delete(`follow/${id}`)
				.then(response => {
					return response.data;
				})
	},
getProfileInfo(id) {
		return instance.get(`profile/${id}`)
			.then( response=>{
				return response.data;
		})
	}
}

export const authAPI = {
	getAuthMe(){
		return	instance.get('auth/me' )
		.then(response => {
			return response.data;
		})
	}
}




