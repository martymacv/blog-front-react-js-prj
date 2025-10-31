function ActionButton({ children, variant = "primary", ...props }) {
    const baseStyles = "transition-transform duration-200 w-fit h-fit py-2 px-4 rounded-md font-roboto text-[12px] font-normal"

    const variants = {
        primary: "bg-[#3137c9ff] text-[#ffffffff] cursor-pointer hover:scale-105 active:duration-50 active:scale-95",
        disabled: "bg-[#ffffff37] text-[#ffffffff] cursor-not-allowed"
    }

    return (
        <button 
            className={`${baseStyles} ${variants[variant]}`}
            type="submit"
            { ...props }>
                {children}
        </button>
    )
}

export default ActionButton
