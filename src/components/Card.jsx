function Card(props) {
    return (
        <>
            <div style={{ backgroundColor: props.bgcolor }} className=" px-10 py-5 text-center my-2 text-2xl  border rounded-md flex-grow ">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </>
    )
}
export default Card