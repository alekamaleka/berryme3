
import React from 'react';
import { useAuth } from '../context/AuthContext';

const DebugInfo = () => {
  const { cart, user } = useAuth();
  
  return (
    <div className="debug-info">
      <div>Cart: {cart.length} items</div>
      <div>User: {user ? user.name : 'Not logged in'}</div>
    </div>
  );
};

export default DebugInfo;