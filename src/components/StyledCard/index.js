import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './style.scss';

export default function StyledCard(props) {

    return (
        <div id="styled-card">
            <div className="item-container">
                <header className="d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faHeart} />
                        <span>12</span>
                    </div>
                </header>
                <div className="img-container">
                    <Image src="https://lh3.googleusercontent.com/PTjo_mSVnftMv9j18kTB6C5zqcPZRlXvMWSeRiVhwkDlIBQVqL3VlnkoYgxlI27E3LvFss2kNBVaoc5o3sJb6wIu3R00zpOHLBYn=s332" />
                </div>
                <div className="footer">
                    <div className="left-wrap">
                        <div>Top Dog Beach Club</div>
                        <div>Top Dog #2566</div>
                    </div>
                    <div className="right-wrap">
                        <div>Price</div>
                        <div className="d-flex"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"/>0.095</div>
                    </div>
                </div>
            </div>
        </div>
    )
}