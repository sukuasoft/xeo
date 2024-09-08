'use client';

import { useEffect, useState } from "react";
import { GameContext } from "./context";

const casasDefault = [-1, -1, -1, -1, -1, -1, -1, -1, -1]

var _casas=casasDefault;
var _playerCurrent=0;

export default function GameWrapper({
    children,
    mode
}: {
    children: React.ReactNode,
    mode: string
}) {
    const [_mode, setMode] = useState(mode);
    const [casas, setCasas] = useState(casasDefault);
    const [resultMessage, setResultMessage] = useState('');
    const [showDialogResult, setShowDialogResult] = useState(false);
    const [playerCurrent, setPlayerCurrent] = useState(0);

    useEffect(()=>{
        _playerCurrent=0;
        _casas=casasDefault;

    }, []);

    const resetGame = (pos:number) =>{
        setPlayerCurrent(0);
        setShowDialogResult(false);
        setResultMessage('');
        setCasas([...casasDefault]);
        
    }

    const jogada = (pos: number) => {
        _casas = _casas.map((casa, index) => {
            if (casa != -1) return casa;

            if (index == pos) {
                return _playerCurrent;

            }
            return casa;

        });
        setCasas(_casas);

        _playerCurrent=_playerCurrent == 0 ? 1 : 0;

        setPlayerCurrent(_playerCurrent);
        
        const result = analisar_casas(_casas);

        //analisar alguem ganhou

        switch (result) {
            case 0:
                setResultMessage('Você venceu')
                setShowDialogResult(true);
                break;
            case 1:
                setResultMessage( mode == 'pc' ?'Seu PC venceu': 'Seu amigo venceu')
                setShowDialogResult(true);
                break;

            case 2:
                setResultMessage('Houve um empate')
                setShowDialogResult(true);
                break;

            default:
                if (mode == 'pc' && _playerCurrent == 1){
                    jogadaPC(_casas);
            
                }
        
                break;
        }

    }

    function jogadaPC(casas:number[]){
        let blockVoid = getCasasVazias(casas);
        let _random = Math.round(Math.random() * blockVoid.length);
     


        if(_random == blockVoid.length){
            _random--;
        }

        let casaRandom = blockVoid[_random] ;


        jogada(casaRandom);
    }

    function getCasasVazias(casas:number[]){

        return casas.map((c, index)=>{
            if (c == -1){
                return index;
            }
            //caso esteja ocupada
            return -1;

        }).filter((c)=>{
            if (c == -1){
                return false;
            }
            return true;

        });

    }

    // 0 -> player 1 || 1 -> player 2 || 2 -> empate || -1 -> ainda sobrando jogadas
    function analisar_casas(casas: number[]) {
        /*
            xxx
            xxx
            xxx
        */


        /* Linha de cima */

        let c = casas[0];
        if (c == casas[1] && c == casas[2]) {
            return c;
        }
        /* Linha do meio */

        c = casas[3];
        if (c == casas[4] && c == casas[5]) {
            return c;
        }

        /* Linha do baixo */
        c = casas[6];
        if (c == casas[7] && c == casas[8]) {
            return c;
        }


        /* Linha esquerda */
        c = casas[0];
        if (c == casas[3] && c == casas[6]) {
            return c;
        }

        /* Linha centro */
        c = casas[1];
        if (c == casas[4] && c == casas[7]) {
            return c;
        }

        /* Linha direita */
        c = casas[2];
        if (c == casas[5] && c == casas[8]) {
            return c;
        }

        /* Linha x esquerda para direita */
        c = casas[0];
        if (c == casas[4] && c == casas[8]) {
            return c;
        }

        /* Linha x direta para esquerda */
        c = casas[6];
        if (c == casas[4] && c == casas[2]) {
            return c;
        }

        //analisar se é um empate
        for(let cs of casas){

            if(cs == -1){
                return cs;
            }

        }
        return 2;
    }

    return (

        <GameContext.Provider
            value={{
                casas,
                setCasas,
                mode: _mode,
                setMode,
                resultMessage,
                setResultMessage,
                showDialogResult,
                setShowDialogResult,
                playerCurrent,
                setPlayerCurrent,
                jogada, 
                resetGame
            }}>
            {children}
        </GameContext.Provider>

    );

}