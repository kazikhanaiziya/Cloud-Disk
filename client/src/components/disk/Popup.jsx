import React, {useState} from "react";
import Input from "../../utils/input/Input";
import {useSelector} from "react-redux";

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)

    return (
        <div className="popup" style={{display: popupDisplay}}>
            <div className="popup__content">
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <button className="popup__close">x</button>
                </div>
                <Input type="text"  placeholder="Введите название папки..." value={dirName} setValue={serDirName}/>
                <button className="popup__create">Создать</button>
            </div>
        </div>
    )
}
