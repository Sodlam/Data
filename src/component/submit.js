import{useState} from 'react';
 
function SubmitComponent(){
   const [userName,setUserName] = useState('');
   const [email, setEmail] = useState('');
   const handleSubmit = (e) => {e.preventDefault();
        alert(`Submitted:${userName}\nEmail:${email}`);
   };
   
   return(
       <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label className='text-lg font-bold'>Enter your name:</label>
        <input type="text" value={userName} onChange={(e) =>setUserName(e.target.value)} />
        </div>
        <div>
        <label className='text-lg font-bold'>Enter your email:</label>
        <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>

        </form>

       </div>
   );
}



export default SubmitComponent;