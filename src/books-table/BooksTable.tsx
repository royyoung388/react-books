import {Component, SyntheticEvent} from "react";
import {BookModel} from "../shared/models/book.model";
import {connect} from "react-redux";
import {ReduxStateModel} from "../shared/models/redux-state.model";
import {configures} from "../shared/configures";
import {bindActionCreators, Dispatch} from "redux";
import {Link} from "react-router-dom";
import {getBooks, updateBookById} from "../action/books.action";
import {AxiosResponse} from "axios";

class BooksTable extends Component<BooksTableProps, BooksTableState> {

    componentDidMount() {
        this.props.getBooks();
    }

    updateHandler = (event: SyntheticEvent) => {
        let id = (event.target as HTMLAnchorElement).getAttribute('data-id');
        this.props.updateBookById(parseInt(id ? id : ''));
    }

    render() {
        return (
            <div>
                <table className='table table-bordered table-hover table-striped'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Author</th>
                        <th>Operation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.books.map(b => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.name}</td>
                                <td>{b.price}</td>
                                <td>{b.author}</td>
                                <td>
                                    <Link to={`${configures.updateBookRoute}/${b.id}`}>Edit</Link>
                                    {/*<Link to className="edit-link" href={configures.updateBookRoute}*/}
                                    {/*   data-id={b.id.toString()} onClick={this.updateHandler}>Edit</Link>*/}
                                    &nbsp;&nbsp;&nbsp;
                                    <a className="delete-link" href="/#" data-id={b.id.toString()}
                                    >Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

interface BooksTableProps {
    books: BookModel[];
    updateBookById: (id: number) => { type: string, payload: number };
    getBooks: () => { type: string, payload: Promise<AxiosResponse> };
}

interface BooksTableState {
    books: BookModel[];
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({updateBookById, getBooks}, dispatch);
}

function mapStateToProps({books}: ReduxStateModel) {
    return {books}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable);