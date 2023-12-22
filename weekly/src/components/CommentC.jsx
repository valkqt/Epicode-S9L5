function CommentC(props) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>{props.text}</div>
            <div className="bg-info-subtle">{props.rating}</div>
        </div>
    )
}

export default CommentC