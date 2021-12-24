import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import { Table, Skeleton } from "antd";

import { generatePath, useHistory } from 'react-router';

import { ROUTER } from '../../../../../constants/router';

import { getOrderListAction } from '../../../../../redux/actions';

import * as S from './styles'

const OrderHistory = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.authReducer)
  const { orderList } = useSelector((state) => state.orderReducer)
  
  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderListAction({ id: userInfo.data.id }));
    }
  }, [userInfo.data]);
  
  const orderColumns = [
    { title: "Order ID", dataIndex: "id", key: "id" },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (item) => moment(item).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Products",
      dataIndex: "productCount",
      key: "productCount",
      render: (_, record) =>
        record.products
          .map((item) => `${item.name} - Qty: ${item.quantity}`)
          .join(", "),
      ellipsis: true,
      width: "250px"
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (item) => `$${item.toFixed(1)}`
    },
    {
      title: "Delivery Status",
      dataIndex: "status",
      key: "status",
      render: (item) => "Delivered",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentType",
      key: "paymentType",
      render: (item) => (item === "cod" ? "Unpaid" : "Paid"),
    },
  ];

  const tableData = orderList.data.map((item) => (
    {
      ...item,
      key: item.id,
    }
  ))

  return (
    <div>
      <h3>Order History</h3>
      {orderList.loading ? (
        <Skeleton active />
      ): (
        <Table
          columns={orderColumns}
          expandable={{
            expandedRowRender: (record) => {
              return record.products.map((item) => (
                <p key={item.id}>
                  <b onClick={() => history.push(
                    generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: item.id})
                  )}>{item.name} - </b>
                  <span>Size: {item.optionName} - </span>
                  <span>Qty: {item.quantity} </span>
                </p>
              ));
            },
          }}
          dataSource={tableData}
        />
      )}
    </div>
  )
}

export default OrderHistory
