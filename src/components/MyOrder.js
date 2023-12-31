import React, { useEffect } from 'react';
import Explain from '@mui/icons-material/ArrowOutwardOutlined';
import { createData } from './admin/Utilis/createData';
import Table from './admin/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../actions/orderActions';
import Loader from './Loader';
import { NavLink } from 'react-router-dom';
import NoOrderIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import HelmetProvider from './SEO/Helmet';

const MyOrder = () => {

  const dispatch = useDispatch();

  const cell = ['Order ID', 'Status', 'Items Qty', 'Amount', 'Actions'];

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  const { myOrders, loading } = useSelector(state => state.myOrders);


  const rows = myOrders.map((item) => createData(item._id, item.orderStatus, item.orderItems.length, item.totalPrice, <NavLink to={`/order/${item._id}`}> <Explain /></NavLink>),)

  return (
    <div className='mt-5 w-full flex flex-col items-center justify-center gap-4'>
      <span className='w-full text-3xl text-center text-emerald-400'>My Orders</span>
      <HelmetProvider
        title={`My Orders(${myOrders && myOrders.length})`}
      />
      <div className='w-full shadow-lg border'>
        {loading
          ?
          <div className='w-full h-screen relative'>
            <Loader />
          </div>
          :
          <Table rows={rows} cell={cell} />}
      </div>
      {!loading && myOrders.length < 1 && <div className='w-full flex flex-col items-center justify-center'>
        <NoOrderIcon sx={{ fontSize: '8rem', color: 'orangeRed' }} />

        <span className='w-full text-center text-2xl'>{"You have not placed Any Order Yet"}</span>
      </div>
      }
    </div>
  )
}

export default MyOrder;
