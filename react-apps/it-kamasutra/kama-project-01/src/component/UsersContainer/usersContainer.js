import User from '../User';
import React,{Component} from 'react';
import * as axios from 'axios';
export default class UsersContainer extends Component {

componentDidMount(){
	axios.get('https://social-network.samuraijs.com/api/1.0/users')
	.then(response => {
			this.props.setUsers(response.data.items)
	})
}

	render(){
		return(
			this.props.usersData.map( u => (
				<User 
					key={u.id}
					name={u.name}
					avatar={u.photos.small}
					follow={u.followed}
					onFollow = {() => this.props.onFollow(u.id)}
					unFollow = {() => this.props.unFollow(u.id)}
					/>
		))		
		)
	}
}
