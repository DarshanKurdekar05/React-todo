import React, { Fragment } from "react";

const Todolist = (props) => {
    let { items, handledelete, handleEdit } = props;
    return (
        <div>
            <h1 className="display-5 text-capitalize fw-bold text-primary my-4">
                List of to do
                </h1>
            {items.map((todo) => (
                <Fragment key={todo.id}>
                    <ul className="list-group">
                        <li className="list-group-item mb-2">
                            <span>{todo.item_title}</span>
                            <span className="float-end btn-group">
                                <button className="btn btn-danger btn-sm"
                                    onClick={(_) => handledelete(todo.id)}
                                >
                                    delete
                             </button>
                                <button className="btn btn-primary btn-sm"
                                    onClick={(_) => handleEdit(todo.id)}
                                >
                                    edit
                             </button>
                            </span>
                        </li>

                    </ul>
                </Fragment>
            ))}
        </div>
    );
};

export default Todolist;
