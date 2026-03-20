import axios from "axios";
import { useState } from "react";

const App = () => {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");

  const handleQuery = async () => {
    axios.post(`http://localhost:3001/ask`, {
      question: input
    })
      .then((res) => {
        setResponse(res.data.answer);
      })
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <h4
        className="text-2xl font-bold mb-4 text-gray-800"
      >What's on your mind today?</h4>
      <input type="text" placeholder="Ask Anything"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> <br />
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleQuery}
      >Post</button>

      <div className="mt-8 w-full max-w-md bg-white p-4 rounded-md shadow-md">
        {
          response ? (
            <p className="text-gray-700">{response}</p>
          ) : (
            <p className="text-gray-500 italic">No responses yet. Start the conversation!</p>
          )
        }
      </div>
    </div>
  )
}

export default App;