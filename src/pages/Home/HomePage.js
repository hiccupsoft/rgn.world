import React from 'react';
import { Button, DropdownButton, Image, Form, FormControl, Accordion, Card, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.scss'
import profileImg from '../../assets/images/user placeholder.png'
import settingImg from '../../assets/images/Settings icon.png'
import shareImg from '../../assets/images/Share icon.png'
import wallet from '../../assets/images/In the wallet.png'
import Activity from '../../assets/images/Activity.png'
import Offer from '../../assets/images/Offer.png'
import Favourites from '../../assets/images/Favourites.png'
import Hidden from '../../assets/images/Hidden.png'
import Inquiry from '../../assets/images/Inquiry.png'
import PriceImg from '../../assets/images/Price.png'
import StatusImg from '../../assets/images/Status.png'
import CollectionImg from '../../assets/images/Collection.png'
import BlockImg from '../../assets/images/Block chain.png'
import { Dropdown } from 'bootstrap';
import { faCoffee, faDollarSign, faPaperclip, faSearch, faStar, faTh } from '@fortawesome/free-solid-svg-icons';
import StyledCard from '../../components/StyledCard';
import { useState } from 'react';


export default function HomePage(props) {
    // const [test, setTest] = useState('0x12341245235235634634')

    return (
        <ThemeContext.Consumer>
            {({ theme, changeThemeMode }) => (
                <div id="homepage" className="" style={{ width: '100vw', height: '100vh' }}>
                    <div className="back-brand"></div>
                    <div className="content">
                        <div className="profile-container">
                            <div className="img-wrap">
                                <Image src={profileImg} className="profile-img" />
                            </div>
                            <div className="profile" style={theme === 'light' ? { color: '#000' } : { color: 'white' }}>
                                <div className="name">User</div>
                                <div className="address">0x12341245235235634634</div>
                                {/* <div className="address" onClick={() => {setTest(Date.now().toString())}}>{test}</div> */}
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="icons">
                                <Image src={settingImg} />
                                <Image src={shareImg} />
                            </div>
                        </div>
                    </div>
                    <div className="options container-fluid pl-5 pr-5 pb-3">
                        <div className="row items">
                            <div className="col">
                                <Image src={wallet} />
                            </div>
                            <div className="col">
                                <Image src={Activity} />
                            </div>
                            <div className="col">
                                <Image src={Offer} />
                            </div>
                            <div className="col">
                                <Image src={Favourites} />
                            </div>
                            <div className="col">
                                <Image src={Hidden} />
                            </div>
                            <div className="col">
                                <Image src={Inquiry} />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 accordion">
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <div className="d-flex accordion-toggle">
                                                <div className="d-flex align-items-center">
                                                    <Image src={StatusImg} />
                                                    {/* <div className="icon-wrap">
                                                        <FontAwesomeIcon icon={faStar} className="icon-img" />
                                                    </div>
                                                    <span className="p-1">STATUS</span> */}
                                                </div>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>This is first tab body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <div className="d-flex accordion-toggle">
                                                <div className="d-flex align-items-center">
                                                    <Image src={PriceImg} />
                                                    {/* <div className="icon-wrap">
                                                        <FontAwesomeIcon icon={faDollarSign} className="icon-img" />
                                                    </div>
                                                    <span className="p-1">PRICE</span> */}
                                                </div>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>This is second tab body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <div className="d-flex accordion-toggle">
                                                <div className="d-flex align-items-center">
                                                    <Image src={CollectionImg} />
                                                    {/* <div className="icon-wrap">
                                                        <FontAwesomeIcon icon={faTh} className="icon-img" />
                                                    </div>
                                                    <span className="p-1">COLLECTION</span> */}
                                                </div>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>This is second tab body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <div className="d-flex accordion-toggle">
                                                <div className="d-flex align-items-center">
                                                    <Image src={BlockImg} />
                                                    {/* <div className="icon-wrap">
                                                        <FontAwesomeIcon icon={faPaperclip} className="icon-img" />
                                                    </div>
                                                    <span className="p-1">BLOCKCHAIN</span> */}
                                                </div>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>This is second tab body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="col-8 right-content">
                                <div className="row input-area">
                                    <div className="col-6 p-0">
                                        <Form className="d-flex">
                                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="mr-2 search-input"
                                                aria-label="Search"
                                            />
                                        </Form>
                                    </div>
                                    <div className="col-3">
                                        <FormControl
                                            as="select"
                                        // custom
                                        // onChange={this.onChangeColor.bind(this)}
                                        >
                                            <option value="red">Single item</option>
                                            <option value="blue">Blue</option>
                                            <option value="green">Green</option>
                                            <option value="black">Black</option>
                                            <option value="orange">Orange</option>
                                        </FormControl>
                                    </div>
                                    <div className="col-3">
                                        <Form.Control
                                            as="select"
                                        // custom
                                        // onChange={this.onChangeColor.bind(this)}
                                        >
                                            <option value="red">Recently received</option>
                                            <option value="blue">Blue</option>
                                            <option value="green">Green</option>
                                            <option value="black">Black</option>
                                            <option value="orange">Orange</option>
                                        </Form.Control>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col">
                                        <StyledCard />
                                    </div>
                                    <div className="col">
                                        <StyledCard />
                                    </div>
                                    <div className="col">
                                        <StyledCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
            }
        </ThemeContext.Consumer >
    )
}