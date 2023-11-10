import "./Btn.css"

const Btn = (props) => {
    return (
        <>
            <button className=" border-2  py-2 rounded-full px-5 font-bold">{props.name}</button>
        </>
    )
}
const Btn2 = (props) => {
    return (
        <>
            <button className="btn2  px-8 py-2 rounded-full font-bold">{props.name}</button>
        </>
    )
}

export default Btn;
export { Btn2 };
