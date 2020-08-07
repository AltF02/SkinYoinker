import React from 'react';
import './Home.scss'
import { Input, Button } from "semantic-ui-react";
import getUserSkinUrl  from '../../services/api/Mojang'
import SkinRenderer from "../SkinRender/SkinRenderer";

class Home extends React.Component<any, any> {
    loading: boolean;
    constructor(props: any) {
        super(props);
        this.state = {value: '', url: ''};

        this.handleChange = this.handleChange.bind(this);
        this.searchSkin = this.searchSkin.bind(this);
        this._handlekeydown = this._handlekeydown.bind(this);
        this.loading = false;
    }

    handleChange (event: any) {
        this.setState({value: event.target.value});
    }

    searchSkin () {
        this.loading = true;
        getUserSkinUrl(this.state.value).then(response => this.setState({url: response}));
        this.loading = false;
    }

    _handlekeydown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            this.searchSkin();
        }
    }
    render() {
        return (
            <div className='homeOuterContainer'>
                <img src={this.state.url} alt='' className='skinImage'/>
                <Input type='text' value={this.state.value} onChange={this.handleChange} loading={this.loading} onKeyDown={this._handlekeydown}/>
                <Button onClick={this.searchSkin}>Get link</Button>
                <SkinRenderer url={this.state.url}/>
            </div>
        )
    }


}

export default Home
