import React, { Component } from 'react'
//userData
class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {
        let userdata = this.props.userData
        let followers = `${userdata.homeURL}/followers`
        let following = `${userdata.homeURL}/following`
        let repos = `${userdata.homeURL}/repositories`
        return (
            <div className="container">
                <section className="github-profile">
                    <div className="github-profile-info">
                        <div className="row">
                            <div className="col-sm-12">
                                <a href={userdata.homeURL} title={userdata.name || userdata.username}><img src={userdata.avatar} /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <h2><a href={userdata.homeURL} title={userdata.name} target="_blank">{userdata.name || userdata.username}</a></h2>
                            </div>
                        </div>
                        <h3>{userdata.location}</h3>
                    </div>
                    <div className="github-profile-state">
                        <ul>
                            <li>
                                <a href={followers} target="_blank" title="Number of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
                            </li>
                            <li>
                                <a href={repos} target="_blank" title="Number of Repositories"><i>{userdata.repos}</i><span>Repositories</span></a>
                            </li>
                            <li>
                                <a href={following} target="_blank" title="Number of Following"><i>{userdata.following}</i><span>Following</span></a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )

    }
}

export default Profile
