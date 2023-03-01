import Image from "next/image"
import Link from "next/link"

export default function Author({ name, img, designation }: any) {
  if(!name && !img) return <></>;

  return (
    <div className="author flex py-5">
        <Image src={img || ""} width={50} height={50} className="rounded-full h-[50px]" alt="/"></Image>        
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"} legacyBehavior>
                <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                    {name || "No Name"}
                </a>
            </Link>
            <span className="text-sm text-gray-500">{designation || ""}</span>
        </div>
    </div>
  )
}
