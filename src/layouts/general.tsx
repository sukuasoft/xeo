import Icon from "@/components/icon";
import Link from "next/link";
export default function LayoutGeneral({
    children = ''
}: {
    children?: React.ReactNode
}) {
    return (
        <div className="radial_gradient_black  
         min-h-screen  w-full 
    text-white px-8 py-10 flex flex-col">
            <div className="w-[350px]  max-w-full 
             mx-auto flex-1 flex flex-col">
                <Icon />
                <div className="mt-4 text-center  font-bold   rounded-md
          px-2 py-1">Jogo rápido e clássico</div>

                {children}

                <div className="mt-8"></div>

                <div className="mt-auto text-sm text-center text-[#626262]">
                    Developed. by <Link href='https://github.com/sukuasoft/'
                        className=" underline hover:text-[white] transition-all duration-300">Sebastião Sukuakueche</Link>
                </div>
            </div>
        </div>
    )
}