import React from 'react';
import './Home.scss'
// import { Input } from "semantic-ui-react";
import getUserSkinUrl  from '../../services/api/Mojang'

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {value: '', url: ''};

        this.handleChange = this.handleChange.bind(this)
        this.searchSkin = this.searchSkin.bind(this)
    }

    handleChange (event: any) {
        this.setState({value: event.target.value})
    }

    searchSkin () {
        console.log(this.state.value)
        getUserSkinUrl(this.state.value).then(response => this.setState({url: response}))
    }

    render() {
        return (
            <div className='homeOuterContainer'>
                <h1>{this.state.value}</h1>
                {this.state.url ? <a href={this.state.url}>Link</a>: null}
                <img src={this.state.url} alt=''/>
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.searchSkin}>Get link</button>
            </div>
        )
    }


}

// @ts-ignore
export default Home
