import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

// Services connect to our backend server
import Mongo from '../../../services/mongo';

const Home = () => {
  const dispatch = useDispatch();
  

  return (
    <div>
        quactics!
    </div>
  );
};

export default Home;
