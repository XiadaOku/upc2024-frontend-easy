import Image from "next/image";


export default function BigBanner() {
    return (
        <div className="hidden lg:flex mt-8 w-full h-auto items-center justify-between py-4 px-16 rounded-xl shadow-lg bg-white">
            <div className="w-fit h-full justify-between flex flex-col gap-4">
                <div className="text-2xl w-80 font-bold text-[#272727]">Узнай какое занятие подойдет вашему ребёнку</div>
                <div className="w-fit px-16 py-3 rounded-xl bg-[#FEA300] select-none">
                    Узнать
                </div>
            </div>
            <Image
                src="/bannerBig.svg"
                alt="Banner"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '100%',
                }}
            />
        </div>
    );
}