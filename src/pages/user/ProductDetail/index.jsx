import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import {
  Card,
  Row,
  Col,
  Rate,
  Radio,
  Button,
  Space,
  Descriptions,
  Form,
  Input,
  List,
  Comment,
  Skeleton,
  InputNumber,
  notification,
  Collapse
} from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";

import {getProductListAction, getCategoryListAction, getProductDetailAction, getCommentListAction, postCommentAction, addToCartAction, updateCartAction} from '../../../redux/actions';

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import * as S from './styles'


const ProductDetailPage = ({ match, ...props }) => {

  const id = match.params?.id;

  const [productQuantity, setProductQuantity] = useState(1);

  const { productDetail } = useSelector((state) => state.productReducer)
  const { commentList } = useSelector((state) => state.commentReducer)
  const { cartList } = useSelector((state) => state.cartReducer)
  const { productList } = useSelector((state) => state.productReducer)

  const { category } = productDetail.data;

  const dispatch = useDispatch();

  useEffect(() => {
    // const recentCategoryFilter = [productDetail.data?.category]
    if(id) {
      dispatch(getProductDetailAction({ id }));
      dispatch(getCommentListAction({ productId: parseInt(id) }));
      // dispatch(getProductListAction({
      //   limit: 4, 
      //   page: 1,
      //   categoryFilter: recentCategoryFilter,
      // }))
    }
  }, [id])

  console.log(productDetail)

  const handleSubmitComment = (values) => {
    dispatch(postCommentAction({
      ...values,
      productId: parseInt(id)
    }))
  }

  const renderProductRate = () => {
    let total = 0;
    commentList.data.forEach((commentItem) => {
      total = total + commentItem.rate;
    });
    return (total / commentList.data.length).toFixed(1);
  }

  const handleAddToCart = (values) => {
    // if(userInfo.data.id) {}

      //check product nay da co trong cartList chua -> thong bao sp da co trong cart
      // const isExist =
      //  cartList.data.findIndex((cartItem) => cartItem.productId === parseInt(id) ) !== -1 

      // lay ra object product neu product nay da co trong cartList(vi can quantity cua product nay) -> update cart
      const existCartProduct = 
        cartList.data.find( (cartItem) => cartItem.productId === parseInt(id) );
    if(existCartProduct) {
      dispatch(updateCartAction({ 
        data: {
          quantity: existCartProduct.quantity + productQuantity,
          id: existCartProduct.id,
        },
        callback: {
          showSuccess: () => notification.success({
            description: "Added to Bag"
          })
        }
      }))
    } else {
      dispatch(addToCartAction({
      // userId: userInfo.data.id,
      productId: parseInt(id),
      quantity: productQuantity,
     }))
    }
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "#000" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "#000" }}
        onClick={onClick}
      />
    );
  }
  
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 5,
    swipeToSlide: true,
    // nextArrow: true,
    // prevArrow: true
  };

  const renderRelativeProduct = () => {
    return productList.data.map((productItem, productIndex) => (
      <S.ProductCard >
      {(productItem.isBestSeller) && <S.BestSeller>Best Seller</S.BestSeller>}
      <img src={productItem.image} alt="" />
      <S.ProductRelativeName>{productItem.name}</S.ProductRelativeName>
      <S.ProductRelativePrice>{`$${productItem.price}`}</S.ProductRelativePrice>
    </S.ProductCard>
    ))      
  }

  return (
    <div>
      <TopWrapper breadcrumb={[
        ...BREADCRUMB,
        {
          title: productDetail.data.name
        }
      ]} />
      
      <S.ProductDetailContainer>
        <S.ProductDetailWrapper>
          <Row gutter={[16, 16]}>
            <Col 
              xs={{ span: 24 }} 
              sm={{ span: 24 }} 
              md={{ span: 24 }} 
              lg={{ span: 14 }}
            >
              <img src={productDetail.data.image} alt="" 
                width="100%"
                height="auto"
              />
            </Col>
            <Col 
              xs={{ span: 24 }} 
              sm={{ span: 24 }} 
              md={{ span: 24 }} 
              lg={{ span: 10 }}
              >
              <S.ProductInfo>
                <S.ProductName>
                  {productDetail.data.name}
                </S.ProductName>
                <S.ProductType>Family: {category?.name}</S.ProductType>  
                <S.ProductDescription 
                  dangerouslySetInnerHTML={{ __html: productDetail.data.description }}
                />
               <div className='space-wrapper'>
                <Space size={12}>
                  <InputNumber
                      // style={{height: 40}}
                      style={{width: 60}}
                      size='large'
                      min={1}
                      max={10}
                      value={productQuantity}
                      onChange={(value) => setProductQuantity(value)}
                    />
                    <Button
                      style={{width: 200}}
                      size="large"
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      onClick={() => handleAddToCart()}
                    >
                      ADD TO CART
                    </Button>
                    <Button style={{width: 70}} size="large" icon={<HeartOutlined />}>
                    </Button>
                  </Space>
                  </div>
                  <S.ProductPrice>{`$${productDetail.data.price}`}</S.ProductPrice>
                  <S.ProductPolicy>
                    <li>Free returns</li>
                    <li>Receive a sample of your fragrance with your order</li>
                    <li>Complimentary shipping on all orders</li>
                    <li>Complimentary Diptyque gift-wrapping</li>
                  </S.ProductPolicy>
                </S.ProductInfo>
            </Col>
          </Row>
        </S.ProductDetailWrapper>
        <S.ReviewWrapper>
          <Row>
            <Col span={14}>
            <S.InfoWrapper>
              <S.Title>Did you know?</S.Title>
              <S.InfoContent 
                dangerouslySetInnerHTML={{ __html: productDetail.data.content }}
              />
              <S.InfoMaterial>
                <h4>RAW MATERIALS</h4>
                <p>{productDetail.data.material}</p>
              </S.InfoMaterial>
            </S.InfoWrapper>
            </Col>
            <Col span={10}>
              <S.Review>
              <Collapse 
                bordered={false} 
                // defaultActiveKey={['1']}
                expandIconPosition='right'
              >
                <Collapse.Panel 
                  header={
                    <S.CollapseHeader>
                      <span>{`Reviews (${commentList.data.length})`}</span>
                        <Rate 
                          allowHalf
                          disabled
                          value={renderProductRate()}
                          style={{ fontSize: 14, color: "#333" }}
                        />
                      
                    </S.CollapseHeader>
                  } 
                  key="1">
                  <Form
                  // form={commentForm}
                  layout="vertical"
                  initialValues={{ rate: 0, content: "" }}
                  onFinish={(values) => handleSubmitComment(values)}
                >
                  <Form.Item
                    label={<S.LabelText>Rate</S.LabelText>}
                    name="rate"
                    rules={[{ required: true, message: "Required !" }]}
                  >
                    <Rate style={{ fontSize: 14, color: "#333" }} allowHalf />
                  </Form.Item>
                  <Form.Item
                    label={<S.LabelText>Comment</S.LabelText>}
                    name="content"
                    rules={[{ required: true, message: "Required !" }]}
                  >
                    <Input.TextArea
                      placeholder="Comment"
                      autoSize={{ minRows: 2, maxRows: 4 }}
                    />
                  </Form.Item>
                  <Button htmlType="submit" type="primary">
                    POST
                  </Button>
                </Form>
                <div style={{marginTop: 14, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                <List
                  className="comment-list"
                  header={
                  <S.CommentsTitle>
                      <Rate 
                        allowHalf
                        disabled
                        value={renderProductRate()}
                        style={{ fontSize: 16, color: "#333" }}
                      />
                      <h3>{renderProductRate()}</h3>
                  </S.CommentsTitle>}
                  itemLayout="horizontal"
                  dataSource={commentList.data}
                  renderItem={(item) => (
                    <S.CommentList>
                      <Comment
                        // author={item.user?.name}
                        content={
                          <>
                          <S.CommentRate>
                            <Rate
                              disabled
                              value={item.rate}
                              allowHalf
                              style={{ fontSize: 14, color: "#333" }}
                            />
                          </S.CommentRate>
                          <S.CommentContent>{item.content}</S.CommentContent>
                          </>
                        }
                        // datetime={moment(item.createdAt).fromNow()}
                        /> 
                      </S.CommentList>
                  )}
                />
                </div>
                {/* <S.CommentList>
                  <S.CommentsTitle>{`${commentList.data.length} Comments`}</S.CommentsTitle>
                  <S.CommentRate>
                    <Rate
                      disabled
                      value={commentList.data.rate}
                      allowHalf
                      style={{ fontSize: 14, color: "#333" }}
                    />
                  </S.CommentRate>
                  <S.CommentContent>{commentList.data.content}</S.CommentContent>
                </S.CommentList> */}
                </Collapse.Panel>
              </Collapse>
              </S.Review>
            </Col>
          </Row>
        </S.ReviewWrapper>

        <S.RelativeProduct>
          <h4>You may also like</h4>
          <S.SlideWrapper>
          <Slider {...settings} >
            {renderRelativeProduct()}
          </Slider>
          </S.SlideWrapper>
        </S.RelativeProduct>
      </S.ProductDetailContainer>
    </div>
  )
}

export default ProductDetailPage
