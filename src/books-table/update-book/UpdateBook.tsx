import {Component, SyntheticEvent} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {BookModel} from "../../shared/models/book.model";
import {ReduxStateModel} from "../../shared/models/redux-state.model";
import {updateBook} from "../../action/books.action";
import {RouteComponentProps} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {configures} from "../../shared/configures";

const editBookSchema = Yup.object({
    id: Yup.number().required("Book ID is required"),
    name: Yup.string().required("Book name is required"),
    price: Yup.number().required("Book price is required").positive("Book price has to be positive"),
    author: Yup.string().required("Book author is required"),
});

class UpdateBook extends Component<UpdateBookProps, UpdateBookState> {


    updateBookHandler = (book: BookModel) => {
        // console.log(book);
        this.props.updateBook(book);
    }

    nameChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            ...this.state,
            name: (event.target as HTMLInputElement).value
        });
    }

    priceChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            ...this.state,
            price: parseInt((event.target as HTMLInputElement).value),
        })
    }

    authorChangeHandler = (event: SyntheticEvent) => {
        this.setState({
            ...this.state,
            author: (event.target as HTMLInputElement).value,
        })
    }

    render() {
        return (
            <div className='px-4 border h-100'>
                <h3 className='my-4'>Edit Book</h3>
                <Formik
                    initialValues={this.props.book}
                    onSubmit={this.updateBookHandler}
                    validationSchema={editBookSchema}>
                    {() => {
                        return (<Form>
                            <div className='row align-items-center mb-3'>
                                <label className="col-md-3 control-label">ID</label>
                                <div className="col-md-6 my-2">
                                    <p className='form-control-plaintext'>{this.props.match.params.id}</p>
                                </div>
                            </div>
                            {configures.EDIT_BOOK_FIELDS.map((item) =>
                                (
                                    <div key={item.label} className='row align-items-center mb-3'>
                                        <label className="col-md-3 control-label">{item.label}</label>
                                        <div className="col-md-6">
                                            <Field name={item.name} type={item.type}
                                                   as="input" className='form-control'/>
                                        </div>
                                    </div>
                                )
                            )}
                            <div className='row mb-3 mx-2'>
                                <div className='col-md-3'>
                                    <input className='btn btn-light form-control border shadow ' type="submit"
                                           name="Submit"/>
                                </div>
                            </div>
                        </Form>)
                    }}
                </Formik>
            </div>
        );
    }
}

interface UpdateBookProps extends RouteComponentProps<{ id: string }> {
    updateBook: (book: BookModel) => void;
    book: BookModel;
}

interface UpdateBookState {

}

function mapStateToProps({books}: ReduxStateModel, ownProps: UpdateBookProps) {
    return {book: books.find((item) => item.id === +ownProps.match.params.id)} as UpdateBookProps;
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({updateBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook);