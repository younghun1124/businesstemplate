export default function HoverCard({ url, p1, p2 }) {
    return (
        <div className="md:w-full">
            <div className="group h-[400px] relative overflow-hidden">

                <div style={{ backgroundImage: `url(${url})` }} className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-out group-hover:scale-105 z-0`}></div>

                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-300 ease-out group-hover:opacity-50 z-10'></div>

                <div className='grid place-items-center w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-0 z-20'>
                    <p className='text-white text-2xl lg:text-md font-bold'>{p1}</p>
                </div>

                <div className='grid content-center place-items-center w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 z-20' style={{ rowGap: '10px' }}>
    {p2.map((item, index) => (
        <p key={index} className='text-white text-2xl lg:text-md font-bold'>{item}</p>
    ))}
</div>
            </div>
        </div>
    );
}
