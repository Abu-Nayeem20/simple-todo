import React, { useState } from 'react'; 
import noteImg from '../../images/notes.png';
import dblClickImg from '../../images/double-tick.png';
import plusImg from '../../images/plus.png';
import { useDispatch } from 'react-redux';
import {added, allCompleted,clearCompleted} from '../../Redux/Todos/actions';

export default function Header() {

    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput("");
    };

    const completeHandler = () => {
        dispatch(allCompleted());
    };

    const clearCompleteHandler = () => {
        dispatch(clearCompleted());
    };

  return (
    <div>
        <div>
                    <form
                        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                        onSubmit={handleSubmit}
                    >
                        <img
                            src={noteImg}
                            className="w-6 h-6"
                            alt="Add todo"
                        />
                        <input
                            type="text"
                            value={input}
                            placeholder="Type your todo"
                            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                            onChange={handleInput}
                        />
                        <button
                            type="submit"
                            className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
                        ></button>
                    </form>

                    <ul className="flex justify-between my-4 text-xs text-gray-500">
                        <li className="flex space-x-1 cursor-pointer" 
                        onClick={completeHandler}>
                            <img
                                className="w-4 h-4"
                                src={dblClickImg}
                                alt="Complete"
                            />
                            <span>Complete All Tasks</span>
                        </li>
                        <li className="cursor-pointer"
                        onClick={clearCompleteHandler}
                        >Clear completed</li>
                    </ul>
                </div>
    </div>
  )
}
