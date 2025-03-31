import React, { useState } from 'react';
import './ChatWindow.scss';

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  avatarUrl: string; // URL for the avatar image
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: 'John', text: 'Hello!' },
    { sender: 'You', text: 'Hi there!' },
  ]);
  const [messageText, setMessageText] = useState('');
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [search, setSearch] = useState('');

  // Example contact list, replace this with actual data from backend
  const contacts: Contact[] = [
    { 
      id: 1, 
      name: 'John Doe', 
      lastMessage: 'Hey there!', 
      avatarUrl: 'https://www.w3schools.com/w3images/avatar2.png' // Avatar URL from backend
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      lastMessage: 'Good morning', 
      avatarUrl: 'https://www.w3schools.com/w3images/avatar1.png' // Another example URL
    },
    // More contacts here...
  ];

  const handleSendMessage = () => {
    setMessages([...messages, { sender: 'You', text: messageText }]);
    setMessageText('');
  };

  const handleContactClick = (contact: Contact) => {
    setActiveContact(contact);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search)
  );

  return (
    <div className="chat-container">
      {/* Left: People List */}
      <div className="people-list">
        <input
          className="search-bar"
          type="text"
          placeholder="Search people"
          value={search}
          onChange={handleSearch}
        />
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="people-item"
            onClick={() => handleContactClick(contact)}
          >
            <div className="avatar" style={{ backgroundImage: `url(${contact.avatarUrl})` }}></div>
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>{contact.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Chat Window */}
      <div className="chat-window">
        {activeContact ? (
          <div>
            <div className="messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === 'You' ? 'sent' : 'received'}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            <div className="input-container">
              <i className="fas fa-paperclip icon"></i> {/* File Attachment Icon */}
              <i className="fas fa-microphone icon"></i> {/* Voice Message Icon */}
              <i className="fas fa-image icon"></i> {/* Photo Icon */}

              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type a message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) : (
          <div>Select a contact to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
