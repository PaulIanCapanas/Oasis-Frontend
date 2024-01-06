const ChatEntry: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
     <div className="min-h-screen flex flex-col items-center justify-center">
  <div className="relative bg-violet-100 w-[1500px] h-[750px]" border-radius="0.125rem"></div>

  <form className="bg-white w-[1500px] h-[150px] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center">
  <div className="flex items-center justify-between w-full">
    <div className="w-3/4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Enter Chat Here
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
      />
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 border border-blue-700 rounded">
      Send
    </button>
  </div>
</form>



</div>
    </div>
  );
};

export default ChatEntry;
