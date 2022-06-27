import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";
import { TodoAdd } from "../../redux/action/todoActions";
const Form = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    //추가 핸들러
    const handleCreate = async () => {
        const body = {
            id: new Date().getTime(),
            text: title,
            state: false,
        };
        if (title === "") {
            alert("할일을 입력해주세요");
            return;
        }
        await dispatch(TodoAdd(body));
        await setTitle("");
    };
    const handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if (e.key === "Enter") {
            handleCreate();
        }
    };
    return (
        <div className="form">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <div className="create-button" onClick={handleCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;
