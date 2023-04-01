import {Component, SyntheticEvent} from "react";
import {connect} from "react-redux";
import {BookModel} from "../../shared/models/book.model";
import {addBook} from "../../action/books.action";
import {AxiosResponse} from "axios";


class AddBook extends Component<AddBookProps, AddBookState> {

    addBookHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        this.props.addBook(this.state?.book, () => {
            this.setState({message: 'Add book succeed'})
        });
    }

    idChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            book: {
                ...this.state?.book,
                id: parseInt((event.target as HTMLInputElement).value),
            }
        });
    }

    nameChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            book: {
                ...this.state?.book,
                name: (event.target as HTMLInputElement).value,
            }
        });
    }

    priceChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            book: {
                ...this.state?.book,
                price: parseInt((event.target as HTMLInputElement).value),
            }
        })
    }

    authorChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            book: {
                ...this.state?.book,
                author: (event.target as HTMLInputElement).value,
            }
        })
    }

    render() {
        return (
            <div className='px-4 border'>
                <h3 className='my-4'>Add Book</h3>
                <form id='add-form' onSubmit={this.addBookHandler}>
                    <div className='row align-items-center mb-3'>
                        <label className="col-md-3 control-label">ID</label>
                        <div className="col-md-6">
                            <input className='form-control' type="number" name="id" onChange={this.idChangeHandler}
                                   required/>
                        </div>
                    </div>
                    <div className='row align-items-center mb-3'>
                        <label className="col-md-3 control-label">Name</label>
                        <div className="col-md-6">
                            <input className='form-control' type="text" name="name" onChange={this.nameChangeHandler}
                                   required/>
                        </div>
                    </div>
                    <div className='row align-items-center mb-3'>
                        <label className="col-md-3 control-label">Price</label>
                        <div className="col-md-6">
                            <input className='form-control' type="number" name="price" step="any"
                                   onChange={this.priceChangeHandler} required/>
                        </div>
                    </div>
                    <div className='row align-items-center mb-3'>
                        <label className="col-md-3 control-label">Author</label>
                        <div className="col-md-6">
                            <input className='form-control' type="text" name="author"
                                   onChange={this.authorChangeHandler}
                                   required/>
                        </div>
                    </div>
                    <div className='row mb-3 mx-2'>
                        <div className='col-md-3'>
                            <input className='btn btn-light form-control border shadow col-md-3' type="submit"
                                   name="Submit"/>
                        </div>
                    </div>
                </form>
                {this.state?.message && <p>Add book successful</p>}
            </div>
        );
    }
}

interface AddBookProps {
    addBook: (book: BookModel, successCallback: () => void) => { type: string, payload: Promise<AxiosResponse> },
}

interface AddBookState {
    book: BookModel,
    message: string | null,
}

export default connect(null, {addBook})(AddBook);