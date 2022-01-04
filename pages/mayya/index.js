import { useState, useEffect } from 'react';

function Mayya() {
  const [data, setData] = useState([]); // You can add a state for loading & error

  useEffect(() => {
    fetch("/api/mayya-data")
      .then((res) => res.json())
      .then((json) => setData(json.template))
      .catch((err) => console.log(err))
  }, []);

  return data.length > 0 
    ? <div>
        {data.map((paragraph) => (
          <div 
            key={paragraph} 
            dangerouslySetInnerHTML={{ 
              __html: paragraph 
            }} 
          />
        ))}
      </div> 
    : null
}

export default Mayya;
