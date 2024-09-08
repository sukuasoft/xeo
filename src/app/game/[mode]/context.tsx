import { createContext} from "react";


interface GameContextType{
    casas: number[];
    mode:string, 
    setMode:Function, 
    setCasas:Function, 
    resultMessage: string, 
    setResultMessage:Function, 
    showDialogResult:boolean, 
    setShowDialogResult:Function, 
    playerCurrent:number, 
    setPlayerCurrent:Function, 
    jogada:Function, 
    resetGame:Function
}
export const GameContext = createContext<GameContextType >({
    casas: [], 
    mode:'', 
    setMode: ()=>{}, 
    setCasas: ()=>{}, 
    resultMessage: '', 
    setResultMessage: ()=>{}, 
    showDialogResult:false,
    setShowDialogResult:()=>{}, 
    playerCurrent: 0, 
    setPlayerCurrent:()=>{},
    jogada:()=>{}, 
    resetGame:()=>{}
});