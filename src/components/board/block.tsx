
import { GameContext } from "@/app/game/[mode]/context";
import { useContext, useMemo } from "react";


export default function BoardBlock({ id, player }: {
    id: number,
    player: number
}) {

    const {jogada, mode, playerCurrent} = useContext(GameContext);

    function _jogada(){
        if(player != -1 || (
            mode == 'pc' ? 
            playerCurrent != 0:
            false
        )){
            return;
        }


        jogada(id);
    }

    const _player = useMemo(()=>{
        switch(player){
            case -1:
                return '';
            case 0:
                return <div className="text-[#ff9100]">X</div>
            case 1:
                return <div className="text-[#ff480a]">O</div>
        }
    }, [player]);
    return (
        <div onClick={_jogada} className={` aspect-square
        flex justify-center items-center
        text-3xl  select-none
 border-white border-solid ` +
            (player == -1 && (
                mode == 'pc' ? 
                playerCurrent == 0:
                true
            ) ? ` active:bg-[#303030]`: ` `) +

            ((id + 1) % 3 != 0 ? `   border-r` : ``) +
            ((id + 1) <= 6 ? `   border-b` : ``)}>
            {_player}
        </div>
    );
}