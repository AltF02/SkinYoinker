import React from "react";
import Skinview3d from 'react-skinview3d';

class SkinRenderer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Skinview3d
                    url={this.props.url}
                    className='skinRender'
                    height='600'
                    width='600'
                />
            </div>
        );
    }

}

export default SkinRenderer

