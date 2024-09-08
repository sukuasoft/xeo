import LayoutGeneral from "@/layouts/general";
import Link from "next/link";
import Image from "next/image";
import arrow_left from "@/assets/left.png";
import Board from "@/components/board";
import GameWrapper from "./wrapper";
import DialogResult from "@/components/dialog_result";


export default function Game({
    params
}: {
    params: any
}) {
    const { mode } = params;

    return (
       <GameWrapper mode={mode}>
         <LayoutGeneral>
            <div className="flex mt-4 items-center 
          gap-4">

                <Link href='/' className="flex items-center 
                w-fit px-4 py-0.5 text-sm rounded-md
                 opacity-50
                hover:opacity-25">
                    <Image src={arrow_left} width={24} alt='' />
                    Ínicio</Link>

                <p>
                    {
                        getNameMode(mode)}</p>

            </div>

            <Board />



        </LayoutGeneral>
        <DialogResult />
       </GameWrapper>

    );
}

function getNameMode(mode: string) {
    if (mode == 'friends') {
        return 'Amigos'
    }
    else if (mode == 'pc') {
        return 'PC'
    }
    return '';
}