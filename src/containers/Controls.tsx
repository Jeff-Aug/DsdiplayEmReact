import { useState } from "react";
import cover from "../assets/images/cover/cradles.jpg"

import { pause, prev, play, next, stop } from "../assets/images/buttons";
// liked, noliked,
import ControlButton from "./components/ControlButton";

const Controls = () => {

    const [isPause, setIsPause] = useState(false)

    const habndlerPlay = () => {
        setIsPause(!isPause)
    }


    return (
        <div className="control-container">
            <img src={cover} alt="Capa do Álbum" className="current" />
            <div className="buttons-container">
                <ControlButton>
                    <img src={prev} alt="Voltar" className="button-icon" />
                </ControlButton>
                <ControlButton>
                    <img src={stop} alt="Parar" className="button-icon" />
                </ControlButton>
                <ControlButton>
                    <img src={isPause ? pause : play} alt="Play/Pause" className="button-icon" onClick={() => habndlerPlay()} />
                </ControlButton>
                <ControlButton>
                    <img src={next} alt="Avançar" className="button-icon" />
                </ControlButton>
            </div>
        </div>
    )
}
export default Controls;