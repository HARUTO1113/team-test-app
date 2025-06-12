
import { useEffect, useState } from 'react';


function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
  fetch('http://localhost:5001')
    .then(res => res.json())
    .then(json => {
      console.log(json); // ← ここで何が入っているか確認
      setMessage(json.message);
    })
    .catch(err => alert("エラーです"))
}, []);

  if(!message){
    return<h1>読み込み中</h1>
  }

  return (
      <>
        <h1>{message}</h1>
      </>   
  )
 
}

export default App;
