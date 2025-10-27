function Avatar({ variant = "big", ...props }) {
    const baseStyles = "object-cover"

    const variants = {
        big: "w-[150px] h-[150px]"
    }

    console.log(variants[variant])

    return (
        <img
            className={`${baseStyles} ${variants[variant]}`}
            { ...props }
            >
        </img>
    )
}

export default Avatar