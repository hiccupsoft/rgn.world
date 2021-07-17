import React from 'react';
import { Button, Image, ListGroup, Nav } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/ThemeContext';
import payoutImg from '../../assets/images/Pay outs.png'
import mycollectionImg from '../../assets/images/My collection.png'
import communityImg from '../../assets/images/Community.png'
import mycollectionHeadingImg from '../../assets/images/My collection heading.png'
import mycollectionIconImg from '../../assets/images/my collection icon.png'
import mycollectionIconImgGrey from '../../assets/images/My collection icon grey.png'
import './style.scss';
import SimpleCard from '../../components/SimpleCard';

export default function SecondPage(props) {

    return (
        <ThemeContext.Consumer>
            {({ theme, changeThemeMode }) => (
                <div id="second-page" className="container-fluid" style={{ width: '100vw', height: '100vh' }}>
                    <div className="row">
                        <div className="col-4">
                            <div className="left-side">
                                <div><Image src={payoutImg} /></div>
                                <div><Image src={mycollectionImg} /></div>
                                <div><Image src={communityImg} /></div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="right-side">
                                <div className="top-area">
                                    <div><Image src={mycollectionHeadingImg} /></div>
                                    <div style={theme === 'light' ? { color: 'grey' } : { color: 'white' }}>
                                        {`Create collections (youir own storefronts), upload digital createions, configure your royarlty, and sell NFTs \n
                                        to your fans - all for free!`}
                                    </div>
                                </div>
                                <div className="bottom-area">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-3">
                                            <div id="simple-card">
                                                <div className="first-item-container">
                                                    <div className="img-container">
                                                        <Image src={theme === 'light' ? mycollectionIconImgGrey : mycollectionIconImg} />
                                                        <div className="text-wrap">
                                                            <div className="text-center">CREATE NEW</div>
                                                            <div className="text-center">COLLECTION</div>
                                                        </div>
                                                    </div>
                                                    <div className="footer">
                                                        <Button variant="primary">CREATE</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3">
                                            <SimpleCard />
                                        </div>
                                        <div className="col-sm-12 col-md-3">
                                            <SimpleCard />
                                        </div>
                                        <div className="col-sm-12 col-md-3">
                                            <SimpleCard />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}