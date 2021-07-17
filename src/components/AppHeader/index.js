import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Toggle from "react-toggle";
import { ThemeContext } from '../../contexts/ThemeContext';
import logo from '../../assets/images/My collection icon light blue.png'
import userImg from '../../assets/images/user placeholder.png'
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AppHeader() {
    const [isDark, setIsDark] = useState(true);

    const onChangeTheme = (event, changeThemeMode) => {
        setIsDark(event.target.checked)
        changeThemeMode();
    }

    return (
        <ThemeContext.Consumer>
            {({ theme, changeThemeMode }) => (
                <div id="appHeader">
                    <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}>
                        <div className="nav nav-container">
                            <a href="/">
                                <Image src={logo} />
                            </a>
                            <div className="search-input">
                                <Form className="d-flex">
                                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2 search-input"
                                        aria-label="Search"
                                    />
                                    {/* <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2"
                                        aria-label="Search"
                                    /> */}
                                </Form>
                            </div>
                            <div>
                                <Navbar.Brand href="#home" style={theme === 'light' ? { color: 'white' } : { color: '#01D2F0' }}>Market Place</Navbar.Brand>
                                <Navbar.Brand href="#home" style={theme === 'light' ? { color: 'white' } : { color: '#01D2F0' }}>Stats</Navbar.Brand>
                                <Navbar.Brand href="#home" style={theme === 'light' ? { color: 'white' } : { color: '#01D2F0' }}>Resources</Navbar.Brand>
                            </div>
                            <div>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <Nav.Link href="#deets"><Image src={userImg} style={{ width: 45, height: 45 }} /></Nav.Link>
                                        <Nav.Link eventKey={2} href="/second">
                                            <Image src={userImg} style={{ width: 45, height: 45 }} />
                                        </Nav.Link>
                                        <Nav.Link className="d-flex align-items-center">
                                            <Toggle
                                                className="DarkToggle"
                                                checked={theme === 'light'}
                                                onChange={event => onChangeTheme(event, changeThemeMode)}
                                                icons={{ checked: "🌙", unchecked: "🔆" }}
                                                aria-label="Dark mode"
                                            />
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </div>
                    </Navbar>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}