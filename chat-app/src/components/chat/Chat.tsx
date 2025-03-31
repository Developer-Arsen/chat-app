import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Chat.scss"

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
}

const Chat: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [contacts] = useState<Contact[]>([
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Good morning' },
  ]);
  const navigate = useNavigate();

  const handleContactClick = (id: number) => {
    navigate(`/chat/${id}`);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-page">
      <input
        type="text"
        placeholder="Search contacts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="contacts-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id} onClick={() => handleContactClick(contact.id)}>
            <div>
              <h3>{contact.name}</h3>
              <p>{contact.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
