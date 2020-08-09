import React from "react";
import './Footer.scss'
import {FooterProps} from "./Types";

export default class Footer extends React.Component<FooterProps, any> {
    render() {
        return (
            <footer className='Container'>
                <div className="footer-group footer-copyright">
                    <span className="copyright">Copyright © {new Date().getFullYear()} Matthew</span>
                </div>
            </footer>
        );
    }
}
