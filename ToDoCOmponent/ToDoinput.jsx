import React, { Component, Fragment } from "react";

class Todoinput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { handleChange, handleSubmit, item, editTodo } = this.props;
        return (
            <Fragment>
                <section className="card col-4 mx-auto">
                    <article className="card-body">
                        <form action="/" onSubmit={handleSubmit}>
                            <div className="form-group-inline">
                                <label htmlFor="item">Add item</label>
                                <input
                                    id="item"
                                    type="text"
                                    placeholder="enter item"
                                    className="form-control"
                                    name="item"
                                    value={item}
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>

                            <div className="form-group-inline">
                                <button
                                    className={
                                        editTodo ? "btn btn-warning my-3" : "btn btn-primary my-3"
                                    }
                                >
                                    {editTodo ? "Edit Item" : "Add Item"}
                                </button>
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}
export default Todoinput;


