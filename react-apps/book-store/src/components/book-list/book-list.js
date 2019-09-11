import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import  { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils/';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../error-indicator';



import './book-list.css'

const BookList = ({ books, onAddedToCart }) => {
	return(
		<ul className='list-group'>
			{
				books.map((book)=>{
					return (
						<li key={book.id} className='list-group-item w-50 mb-3'>
							<BookListItem 
							book={book}
							onAddedToCart = { () => onAddedToCart(book.id)} />
						</li>
					)
				})
			}
		</ul>
	);
};

class BookListContainer extends Component {

	componentDidMount(){
		this.props.fetchBooks();
	}

	render(){
		const { books, loading, error, onAddedToCart } = this.props;

		if(loading) {
			return <Spinner />
		}

		if(error) {
			return (<ErrorIndicator /> )
		}

	return <BookList books= {books} onAddedToCart = {onAddedToCart} />

	}
}

const mapStateToProps = ({ bookList: { books, loading, error }} ) => {
	return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch ),
		onAddedToCart: (id) => dispatch(bookAddedToCart(id))
	
	};
};

export default compose (
	withBookstoreService(),
		connect(mapStateToProps, mapDispatchToProps)
			)(BookListContainer);
