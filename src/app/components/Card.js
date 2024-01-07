export default function Card({children,className=''}) {
    return (
        <div className={'prose w-full h-full flex flex-col items-center p-4 border border-gray-200  shadow-lg'+className}>   
               {children}
        </div>
    );
}
