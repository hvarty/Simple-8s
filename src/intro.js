import './intro.css';
const intro = ({setisIntro}) => {
    return (
        <div className="container">
            <div className="rules">
                <h2>Rules:</h2>
                <ul>
                    <li>rule 1</li>
                    <li>rule 1</li>
                    <li>rule 1</li>
                    <li>rule 1</li>
                </ul>
            </div>
            <div className="column2">
                <div className="howtoplay">            <h2>How to play:</h2>
                    <ul>
                        <li>step 1</li>
                        <li>rule 1</li>
                        <li>rule 1</li>
                        <li>rule 1</li>
                    </ul>
                </div>
                <div className="buttoncontainer">
                    <button onClick={()=> setisIntro(false)} >Play</button>
                </div>
            </div>

        </div>



    )
}
export default intro