import Image from "next/image";


export default function SmallBanner() {
    return (
        <div className="lg:hidden flex mt-8 items-center rounded-xl scale-110 bg-[#FFF3DD]">
            <div className="absolute scale-90 m-2 text-2xl w-52 font-bold text-[#272727]">
                <span className="text-[#9F9F9F]">Узнай какое занятие</span> подойдет вашему ребёнку
            </div>
            <Image
                src="/bannerSmall.svg"
                alt="Banner"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '100%'
                }}
            />
        </div>
    );
}