import React, { Component } from 'react'
//getProfile
class Search extends Component {
    submitForm(event) {
        event.preventDefault();
        let value = this.refs.username.value;
        this.props.searchProfile(value)
        this.refs.username.value = ''
    }
    render() {
        return (
            <div className="search-box container text-align-center">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.submitForm.bind(this)}>
                            <label><input type="search" ref="username" placeholder="UserName" /></label>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
