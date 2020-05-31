import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './NewsList';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr' +
          '&category=sports&apiKey=fad3a6f03d89412ca9ed131932749b25',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NewsList />
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       row={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
  );
};

export default App;
