import React from 'react';
import './Home.scss'
import { Input } from "semantic-ui-react";

class Home extends React.Component<any, any> {
    input_text: { value: string };
    constructor(props: any) {
        super(props);
        this.input_text = {value: ''};

        this.handleChange.bind(this)
    }

    handleChange (event: any) {
        alert(event.target.value)
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div className='homeOuterContainer'>
                <h1>Hello</h1>
                <Input type='text' value={this.input_text} onChange={this.handleChange}/>
            </div>
        )
    }


}

// @ts-ignore
export default Home
