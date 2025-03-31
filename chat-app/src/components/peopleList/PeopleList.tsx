import { Link } from "react-router-dom";

const PeopleList: React.FC = () => {
  const people: string[] = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className="w-80 bg-white shadow-md h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-semibold">Chats</h2>
      </div>
      <ul>
        {people.map((person, index) => (
          <li key={index} className="flex items-center p-4 border-b hover:bg-gray-100 cursor-pointer">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">{person[0]}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{person}</h3>
              <p className="text-sm text-gray-500">Last message...</p>
            </div>
            <Link to={`/chat/${person}`} className="text-blue-500">Chat</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
