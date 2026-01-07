import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold">Task System</h1>
      <div>
        <Link to="/add" className="mr-4 bg-blue-500 px-3 py-1 rounded">
          Add Task
        </Link>
        <Link to="/list" className="bg-green-500 px-3 py-1 rounded">
          Task List
        </Link>
      </div>
    </div>
  );
}
