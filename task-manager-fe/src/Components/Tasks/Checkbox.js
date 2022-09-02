import React, {useState} from "react";
import '../../Styles/Checkbox.css'

const Checkbox = ({onClick}) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <label className="container">
            <input type="checkbox" 
                onChange={() => {
                    setIsChecked(!isChecked)
                    onClick()}}/>
            <svg aria-hidden='true' 
                className={`checkbox ${isChecked ? 'checkbox--active' : ''}` } 
                viewBox="0 0 15 11" 
                fill="none" > 
                    <path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="2"
                        stroke={isChecked ? "#fff" : "none"}
                    />
            </svg>
        </label>
    )
}

export default Checkbox