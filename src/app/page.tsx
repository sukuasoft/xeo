import users from "@/assets/users.png";
import bot from "@/assets/bot.png";
import BtnChoose from "@/components/btn_choose";
import LayoutGeneral from "@/layouts/general";

export default function Home() {
  return (
    <LayoutGeneral>
      <div className="mt-8 grid grid-cols-2 gap-6">
 
        <BtnChoose linkAction="/game/friends" image={users} title="Amigos" />
        <BtnChoose linkAction="/game/pc" image={bot} title="PC" />

      </div>
    </LayoutGeneral>
  );
}
