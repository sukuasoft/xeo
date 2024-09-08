import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function BtnChoose({
    image, title, linkAction, 
}: {
    image: StaticImport, 
    title: string, 
    linkAction:string
}){
    return (
        <Link href={linkAction} className="bg-[#272727] px-4 py-8
             rounded-md cursor-pointer
             flex flex-col items-center hover:outline-white 
             hover:outline-1 hover:outline hover:bg-[#404040]
             group">
            <Image width={30} className=" opacity-30 group-hover:opacity-100"
              src={image} alt='' />
            <p className="text-sm mt-2">{title}</p>
          </Link>
    );
}