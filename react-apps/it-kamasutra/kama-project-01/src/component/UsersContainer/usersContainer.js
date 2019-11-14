import User from '../User';
import React,{Component} from 'react';
import * as axios from 'axios';
// import Preloader from '../Preloader'

import Pages from '../Pages';
export default class UsersContainer extends Component {

componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalPeople(response.data.totalCount)
		})
}

onPageChanged =(pageNumber) => {
	
	this.props.setCurrentPage(pageNumber);
	axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
	.then(response => {
		this.props.setUsers(response.data.items)
	})
}

render(){
			return(
			<div>
					<Pages  totalPeople={this.props.totalPeople}
									pageSize={this.props.pageSize}
									currentPage={this.props.currentPage}
									onPageChanged={this.onPageChanged}/>

					{this.props.usersData.map( u => (
								<User 
									id={u.id}
									key={u.id}
									name={u.name}
									avatar={u.photos.small}
									follow={u.followed}
									onFollow = {() => this.props.onFollow(u.id)}
									unFollow = {() => this.props.unFollow(u.id)}
									/>
							))
					}	
			</div>
						
		)
	}
}
