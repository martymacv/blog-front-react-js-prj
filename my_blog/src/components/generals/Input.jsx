function Input({ 
        variant = "primary", 
        requirements = [], 
        fieldValue = '',
        state = {},
        ...props }) {
    const baseStyles = 'font-roboto text-[#d2d2d2ff] text-[14px] font-normal w-full focus:outline-none'
    const borderStyle = 'border-b-2 pb-1'
    const placeholderStyle = 'placeholder:text-[#ffffff37]'

    const variants = {
        primary: 'border-[#3f3f3fff] focus:border-[#107effff]',
        valid: 'border-[#00cf00ff]',
        invalid: 'border-[#ff2000ff]',
    }

    return (
        <>
            <input { ...props }
                className={`${baseStyles} ${borderStyle} ${placeholderStyle} ${variants[variant]}`}/>
            <ul>
                {requirements.map((req) => (
                    <li className={fieldValue ? `font-roboto text-[12px] font-medium ${state[req.type] ? "text-[#00cf00ff]" : "text-[#ff2000ff]"}` : 'font-roboto text-[#ffffff37] text-[12px] font-normal'}
                        key={req.type}
                    >
                    {state[req.type] ? '✓' : '✗'} {req.short_msg}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Input
