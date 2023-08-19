
interface IShowArray {
    array: number[];
    bgColor?: string | boolean;
}

const ShowArray = (props: IShowArray) => {
    const { array, bgColor = "greenyellow" } = props;
    return (
        <div
            className="array-container"
            style={{
                "--arrayLength": array.length,
                "--bgColor": bgColor
            } as React.CSSProperties}
        >
            {array.map((e) => (
                <div className="array-element">{e}</div>
            ))}
        </div>
    );
};

export default ShowArray;