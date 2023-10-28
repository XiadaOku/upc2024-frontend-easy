import Image from "next/image";


export default function Logo() {
    return (
        <div className="flex w-fit h-fit max-w-xl relative">
            <Image
                src="/skillactive.svg"
                alt="Skillactive"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                className="px-20"
            />
        </div>
    );
}