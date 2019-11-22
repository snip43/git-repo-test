import User from '../User';
import React,{Component} from 'react';
import {compose} from 'redux';

import Pages from '../Pages';
import withAuthRedirect from '../../hoc/withAuthRedirect';
class UsersContainer extends Component {

componentDidMount(){
	this.props.getUsers(this.props.currentPage, this.props.pageSize);	
}

onPageChanged =(pageNumber) => {
	this.props.setCurrentPage(pageNumber);
	this.props.getUsers(pageNumber,this.props.pageSize);
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
									followingInProgress={this.props.followingInProgress}

									onFollow = {() => {
										this.props.follow(u.id);
									}}

									unFollow = {() => {
										this.props.unfollow(u.id)
									}}
								/>
					))}	
			</div>
						
		)
	}
}


export default compose (
	withAuthRedirect
)(UsersContainer);