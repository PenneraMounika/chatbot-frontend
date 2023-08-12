import { connect } from "react-redux"
import { useDispatch, useSelector } from 'react-redux'

function InputField() {
    const id = useSelector((state) => state.id)
    const responses = useSelector((state) => state.responses)
    const dispatch = useDispatch()

    var details = []

    function saveDetails(x) {
        details.push(x)
        // console.log(details)
        dispatch({type: 'message', payload: x, details: details})
    }

    function htmlProvider(x) {
        if(x === "nameInput") {
            return (
                <>
                    <input type="text" id="name" className="input" placeholder="Name" onkeydown={(event) => {if(event.keyCode == 13) {dispatch({type:'message', payload:event.value})}}} />
                    <button className="submit" onClick={() => {saveDetails(document.getElementById("name").value)}}>Submit</button>
                </>
            )
        } else if(x === "ageInput") {
            return (
                <>
                <select name='age' id='age' className='select'>
                    {
                        (() => {
                            var x = []
                            for(var i = 18; i <= 40; i++) {
                                x.push(<option value={i}>{i}</option>)
                            }
                            return x
                        })()
                    }
                </select>
                <button className="submit" onClick={() => {saveDetails(document.getElementById("age").value)}}>Submit</button>
                </>
            )
        }
    }

    return (
        <div className="input-field">
            { id === 1 && <button className="startButton" onClick={() => {dispatch({type: 'message', payload: 'Got it!'})}}>Got it!</button> }
            {
                responses.map(element => 
                    htmlProvider(element.body)
                )
            }
        </div>
    )
}

export default connect()(InputField);