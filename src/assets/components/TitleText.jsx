function TitleText({ title, text }) {
    return (
        <div>
            <h2 className="mb-2 mt-3 font-bold text-lg sm:text-xl">{title}</h2>
            <p className="font-light text-xs sm:text-sm md:text-base">{text}</p>
        </div>
    );
}

export default TitleText;