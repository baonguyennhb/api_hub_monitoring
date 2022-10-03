import React, { Component } from 'react'
import President from './President'
import { Navigate } from 'react-router-dom'
import { login } from '../../redux/actions'
import { connect } from 'react-redux'

class Container extends Component {

    handleLogin = (data) => {
        this.props.login({
            username: data.username !== undefined ? data.username : '',
            password: data.password !== undefined ? data.password : '',
        })
    }
    render() {
        const auth = this.props.auth
        const user = auth.user
        if (user.id !== null && user.id !== undefined) {
            return (
                <Navigate to={"/api-source"} />
            )
        }
        return (
            <President handleLogin={this.handleLogin}
                loading={this.props.auth.login.loading}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (data) => {
            dispatch(login(data))
        }
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)