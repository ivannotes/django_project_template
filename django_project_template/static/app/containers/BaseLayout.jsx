import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'; // for programmatic history navigating
import { autobind } from "core-decorators";

function mapStateToProps(state) {
    return {user: state.user};
}

@connect(mapStateToProps, dispatch => ({dispatch}))
class BaseLayout extends React.Component {

    onSelectMenu(menu) {
        this.props.dispatch(push(menu));
    }

    render() {
        return (
            <div className="row navigator-box">
                <div className="col-md-1">
                    <div className="list-group">
                        <a href="#" className="list-group-item"
                           onClick={() => this.onSelectMenu("users")}>User</a>
                        <a href="#" className="list-group-item"
                           onClick={() => this.onSelectMenu("board")}>Board</a>
                    </div>
                </div>
                <div className="col-md-11">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default BaseLayout;
