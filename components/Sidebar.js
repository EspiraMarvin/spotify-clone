import Image from "next/image"
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
} from "@heroicons/react/solid"
import { FaMicrophoneAlt } from 'react-icons/fa'
import { RiCompassFill } from 'react-icons/ri'

function Sidebar() {
    return (
        <section className="fixed top-0 z-40 flex flex-col items-center p-4 bg-black w-[90px] h-screen space-y-8">
            <Image src="https://rb.gy/xkacau" width={56} height={56} objectFit="contain" />
            <div className="flex flex-col space-y-8"> 
                <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
                <RiCompassFill className="text-3xl sidebarIcon" />
                <FaMicrophoneAlt className="ml-1 sidebarIcon" />
                <ChartBarIcon className="sidebarIcon"  />
                <ClockIcon className="sidebarIcon" />
                <DotsHorizontalIcon className="sidebarIcon" />
            </div>
        </section>
    )
}

export default Sidebar
