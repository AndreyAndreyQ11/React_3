import s from "./ColorPicker.module.css";

function ColorPicker({ options }) {
    return (
        <div className={s.ColorPicker} >
            <h2 > ColorPicer</h2>
            <div>
                {options.map(option => (
                    <span
                        className={s.span}
                        key={option.label}
                        style={{ backgroundColor: option.color }}
                    >{option.label}
                        <div>1111</div></span>
                ))}
            </div>
        </div >
    )
}


export default ColorPicker;