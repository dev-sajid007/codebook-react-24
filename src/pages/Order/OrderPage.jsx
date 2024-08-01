import React from 'react'
import { useLocation } from 'react-router-dom';
import OrderSuccess from './components/OrderSuccess';
import OrderFail from './components/OrderFail';
import { useTitle } from '../../hooks/useTitle';

const OrderPage = () => {
  useTitle("Order");
  const {state} = useLocation();

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}

export default OrderPage;
