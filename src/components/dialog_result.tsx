'use client'
import Image from "next/image"
import win from "@/assets/win.png";
import { useContext } from "react";
import { GameContext } from "@/app/game/[mode]/context";
import Link from "next/link";

import home from "@/assets/home.png";
import reload from "@/assets/reload.png";

export default function DialogResult() {
    const { resultMessage, showDialogResult, resetGame } = useContext(GameContext);
    
    if(showDialogResult){
return (
       <div className="fixed z-10
       w-full h-full bg-[#000000a3] left-0 top-0">
            <div className=" absolute bg-[#ffffff]
          z-20
        top-1/2 left-1/2 w-[250px]
         -translate-x-1/2 -translate-y-1/2
         rounded-xl px-4 py-4 text-center
          select-none
          ">
                <p className="font-bold mb-4">Resultado</p>
                <Image className="mx-auto mb-4" src={win} width={30} alt='' />
                <p>{resultMessage}</p>
                <div className="flex gap-2 mt-8 items-center 
           justify-center">

                    {/* adicionar a funcionalidade */}
                    <button onClick={()=>{
                        resetGame();
                    }} className="flex items-center bg-[#101010]
           text-white px-4 py-1 rounded-lg gap-2 text-sm
           hover:bg-[#202020]" >
                        <Image src={reload} width={18} alt='' />

                        Repetir</button>
                    <Link className="flex items-center bg-[#101010]
           text-white px-4 py-1 rounded-lg gap-2 text-sm
             hover:bg-[#202020]" href='/'>
                        <Image src={home} width={18} alt='' />
                        Ínicio
                    </Link>


                </div>
            </div>
        </div>
    )

    }
    else{
        return (<></>)
    }
}