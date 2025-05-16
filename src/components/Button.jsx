

export default function Button({text}){
    return (
        <button className="text-[#f97316] raleway bg-white border border-[#f97316] py-2 px-6 rounded-[70px] hover:bg-[#f97316] hover:text-white font-extrabold transition-colors">
            {text}
        </button>
    )
}