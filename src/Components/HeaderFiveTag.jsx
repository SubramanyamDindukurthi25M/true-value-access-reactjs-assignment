export const HeaderFiveTag = ({
        text,
        name
    }) => {
    return (
        <h6>
            {text} : <span className="font-weight-bold">{name}</span>
        </h6>
    )
}