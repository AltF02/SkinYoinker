import React from 'react';
import './Home.scss'
import { Input, Button } from "semantic-ui-react";
import getUserSkinUrl  from '../../services/api/Mojang'
import SkinRenderer from "../SkinRender/SkinRenderer";
import {HomeProps} from "./Types";

class Home extends React.Component<HomeProps, any> {
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
        console.time();
        getUserSkinUrl(this.state.value)
            .then(response => this.setState({url: response}))
            .catch(e => alert(e));
        console.timeEnd();
        this.loading = false;
    }

    _handlekeydown(e: React.KeyboardEvent) {
        switch (e.key) {
            case 'Enter':
                this.searchSkin();
                return;
            default:
                return;
        }
    }
    render() {
        return (
            <div className='homeOuterContainer'>
                <Input type='text' value={this.state.value} onChange={this.handleChange} loading={this.loading} onKeyDown={this._handlekeydown}/>
                <Button onClick={this.searchSkin}>Get skin</Button>
                <SkinRenderer url={this.state.url}/>
            </div>
        )
    }


}

export default Home
