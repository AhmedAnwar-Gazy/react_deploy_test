const ColorBox = ({ newColor ,hexValue ,isDarkText}) => {
  return (
      <div style={{
        height:"200px",
        width:"200px", 
        background:newColor,
        color:isDarkText?"black":"white"
         }}>
        <h1>{newColor}</h1>
        <h1>{hexValue}</h1>
    </div>
  )
}

export default ColorBox