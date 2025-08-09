import colorNames from 'colornames';
const AddItem = ({newColor , setNewColor,setHexValue}) => {
  return (
    <form action="">
      <input 
          type="text" 
          name="" 
          id="" 
          placeholder="Enter Color"
          value={newColor}
          onChange={(e) => {
            setNewColor(e.target.value);
            setHexValue(colorNames(e.target.value));
            }}/>
    </form>
  )
}

export default AddItem