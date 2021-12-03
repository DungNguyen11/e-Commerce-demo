import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import { Table } from "antd";

import { getOrderListAction } from '../../../redux/actions';

const ProfilePage = () => {

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authReducer)
  const { orderList } = useSelector((state) => state.orderReducer)
  
  // useEffect(() => {
  //   if (userInfo.data.id) {
  //     dispatch(getOrderListAction({ id: userInfo.data.id }));
  //   }
  // }, [userInfo.data]);
  
  useEffect(() => {
    dispatch(getOrderListAction())
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

export default ProfilePage
