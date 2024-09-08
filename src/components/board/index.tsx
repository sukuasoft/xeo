'use client'

import { GameContext } from "@/app/game/[mode]/context";
import { useContext, useMemo } from "react";
import BoardBlock from "./block";

export default function Board() {
    const { casas } = useContext(GameContext);
    return (
        <div className=" grid grid-cols-3 grid-rows-3 
        w-[250px] mx-auto
      mt-8">
            {
                casas.map((casa, index) => {
                    return <BoardBlock key={index} id={index} player={casa} />
                })
            }
        </div>
    );
}

