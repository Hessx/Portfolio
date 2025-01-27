import { useState } from "react";

export default function ShowMore() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleButtons = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-center my-20">
      <button
        onClick={toggleButtons}
        className="font-ovo w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-5 mx-auto
                hover:bg-gray-700 hover:text-white
                hover:-translate-y-1 duration-200"
      >
        Mostrar mais
      </button>

      {isExpanded && (
        <div className="mt-5 flex gap-4 justify-center">
          <a
            href="https://github.com/Hessx"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ovo px-5 py-3 text-white bg-gray-800 rounded-md hover:bg-gray-700 duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.behance.net/vitorhc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ovo px-5 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-400 duration-200"
          >
            Behance
          </a>
        </div>
      )}
    </div>
  );
}
