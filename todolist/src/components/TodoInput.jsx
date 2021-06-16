import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="form">
                <input
                
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" className="form-input"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className="form-btn">ADD</button>
            </div>
        </div>
    )
}

export default TodoInput