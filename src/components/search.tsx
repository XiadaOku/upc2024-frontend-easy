import Image from "next/image";


export default function Search() {
    return (
        <div className="mt-16 flex w-full h-16 lg:gap-2">
            <div className="h-full w-full flex bg-[#F8F8F8] rounded-xl lg:rounded-r-none justify-center">
                <div className="flex w-full m-4 gap-4 items-center">
                    <Image
                        src="/search.svg"
                        alt="Search"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: 'auto',
                            height: '100%',
                        }}
                    />
                    <input type="text" className="w-full text-[#9F9F9F] text-sm select-none focus:outline-none bg-transparent" placeholder="Введите название секции или кружка"/>
                </div>
            </div>
            <div className="hidden h-full w-64 rounded-r-xl lg:flex justify-center items-center bg-[#FEA300] select-none">
                Найти
            </div>
        </div>
    );
}