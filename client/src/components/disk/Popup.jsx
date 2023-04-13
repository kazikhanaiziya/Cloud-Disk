import React, {useState} from "react";
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {createDir} from "../../actions/file";

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler {
        dispatch(createDir(current, dirName))
    }

    return (
        <div className="popup" onClick={() => dispatch(SetPopupDisplay ('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation() )}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <button className="popup__close" onClick={() => dispatch(SetPopupDisplay ('none'))}>x</button>
                </div>
                <Input type="text"  placeholder="Введите название папки..." value={dirName} setValue={serDirName}/>
                <button className="popup__create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    )
}
