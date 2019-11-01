import AllPosts from '../AllPosts/allPosts';
import {connect} from 'react-redux';


const mapStateToProps =(state)=> {

		return {
			postsData: state.profilePage.postsData
		}
	}


const AllPostsContainer = connect(mapStateToProps)(AllPosts);

export default AllPostsContainer;