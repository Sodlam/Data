 import{useState} from 'react';
 
 function FormComponent(){
    const [inputValue,setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    
    return(
        <div>
            <label>Enter your name:</label>
                <input type="text" value={inputValue} onChange={(e) =>setInputValue(e.target.value)} />
                <p>Input value: {inputValue}</p>

            <label>Select an option from the drop down below:</label>
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Afees">Afees</option>
                    <option value="Ade">Ade</option>
                    <option value="Aina">Aina</option>
            </select>
                <p>Selected value: {selectedValue}</p>
        </div>
    );
 }



export default FormComponent;