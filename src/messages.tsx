import React, { useState } from "react";
import io from "socket.io-client";
import "./css/message.css";
import MenuBar from "./assets/menubar.png"

const socket = io("http://localhost:5000");

const ChatMessage = () => {
    const [username, setUserName] = useState("");
    const [chatActive, setChatActive] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
    const [contacts, setContacts] = useState<string[]>([]);

    const handleUsernameSubmit = () => {
        setChatActive(true);
        setContacts(["Friend 1", "Friend 2", "Friend 3"]);
    };

    const handleSendMessage = () => {
        const newMessage = { sender: username, content: message };
        setMessages([...messages, newMessage]);
        setMessage("");
    };

    const user = "User"

    return (
        <>
            <nav className="navbar">
                <div className="menu-bar">
                    <h1 className="navbar-title"><a className="navbarTitle" href="/owner-home-page">Oasis</a></h1>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <img src={MenuBar} className="menubarImg" />
                            <div className="dropdown-content">
                                <a href="/user-page">User</a>
                                <a href="/chat">Messages</a>
                                <a href="/bookings">Bookings</a>
                                <a href="/my-bookings">Your Bookings</a>
                                <div className="logout"><a href="/login">Logout</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


            <div className="chat-container">
                {!chatActive ? (
                    <div>
                        <label className="label" htmlFor="username">Enter your username:</label>
                        <input
                            className="input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <button className="button" onClick={handleUsernameSubmit}>Set Username</button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <p>Welcome, {user}!</p>
                        </div>
                        <div className="contacts">
                            <h2>Contacts</h2>
                            <ul>
                                {contacts.map((contact, index) => (
                                    <li key={index}>{contact}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2>Chat Box</h2>
                            <div className="chat-box">
                                {messages.map((msg, index) => (
                                    <div key={index} className="message">
                                        <strong>{msg.sender}:</strong> {msg.content}
                                    </div>
                                ))}
                            </div>
                            <label className="label" htmlFor="message">Type your message:</label>
                            <input
                                className="input input-message"
                                type="text"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button className="button" onClick={handleSendMessage}>Send Message</button>
                        </div>
                    </div>
                )}
            </div>
            </>
            );
};



export default ChatMessage;
