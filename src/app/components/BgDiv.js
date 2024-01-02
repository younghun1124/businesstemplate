export default function BgDiv({url}) {
    return (
        <div style={{ backgroundImage: `url(${url})` }} className='absolute top-0 left-0 w-full h-full brightness-50'></div>
    );
}

