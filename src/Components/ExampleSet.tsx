import ShowArray from "./ShowArray";

interface IExampleSet {
    original: any[];
    returned: any[] | number | string | undefined | boolean;
    modified?: any[];
    operation: React.ReactNode;
    returnedSameRef?: boolean;
}
const ExampleSet = (props: IExampleSet) => {
    const {
        original,
        returned,
        operation,
        modified,
        returnedSameRef = true
    } = props;
    const isInPlace = Array.isArray(modified);
    const returnedView = Array.isArray(returned) ? (
        <ShowArray
            array={returned}
            bgColor={!isInPlace || !returnedSameRef ? "#00a1ff" : undefined}
        />
    ) : (
        `${returned}`
    );
    return (
        <div className="example">
            {isInPlace && (
                <div className="in-place">
                    <ShowArray array={original} />
                    <div style={{ fontSize: "2rem", color: "red" }}>↓</div>
                    <ShowArray array={modified} />
                </div>
            )}
            {!isInPlace && <ShowArray array={original} />}
            <div className={`example-element ${isInPlace && "impure-operation"}`}>
                <a
                    href={`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/${new String(operation)
                        .split("(")[0]
                        .replace(".", "")}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {operation}
                </a>
            </div>
            {returnedView}
        </div>
    );
};

export default ExampleSet;