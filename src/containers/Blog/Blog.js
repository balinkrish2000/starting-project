import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent';
import {Route, NavLink, Switch, Redirect }from 'react-router-dom';
//import NewPost from './NewPost/NewPost'
const AsyncNewpost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {

    state = {
        auth: true
    }

    render () { 
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={
                                    {
                                        color: '#fa93f',
                                        textDecoration: 'underline'
                                    }
                                }>Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-sumit=true'
                                }
                            }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/"  exact render={() => <Posts/>}/>*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewpost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={()=> <h1>Not found</h1>}/>
                    {/*<Redirect from="/" to="/posts"/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;