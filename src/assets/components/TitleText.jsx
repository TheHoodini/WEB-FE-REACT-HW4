function TitleText({ title, text }) {
    return (
        <div>
            <h2 className="mb-2 mt-3 font-bold text-xl">{title}</h2>
            <p className="font-light">{text}</p>
        </div>
    );
}

export default TitleText;