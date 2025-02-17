import { useState } from "react";


export default function Player({symbol, initialName, isActive}) {


    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    return (
        
        <li className={isActive ? 'active' : undefined}>
            <span className="player" >
            {isEditing ? (<input type="text" required value={playerName} onChange = {(e) => setPlayerName(e.target.value)}/>) :
              (<span className="player-name">{playerName}</span>) }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {() => setIsEditing( editing => !editing )}>{isEditing ? 'Save' : 'Edit'}</button>
         </li>     
    );
}