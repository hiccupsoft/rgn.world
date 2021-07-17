import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './style.scss';

export default function SimpleCard(props) {

    return (
        <div id="simple-card">
            <div className="item-container">
                <div className="img-container">
                    <Image src="https://lh3.googleusercontent.com/PTjo_mSVnftMv9j18kTB6C5zqcPZRlXvMWSeRiVhwkDlIBQVqL3VlnkoYgxlI27E3LvFss2kNBVaoc5o3sJb6wIu3R00zpOHLBYn=s332" />
                </div>
                <div className="footer">
                    
                </div>
            </div>
        </div>
    )
}