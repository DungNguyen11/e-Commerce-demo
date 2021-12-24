import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useHistory } from 'react-router';

import Slider from "react-slick";
import moment from "moment";
import Lightbox from "react-image-lightbox";

import {
  Row,
  Col,
  Rate,
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
  Collapse,
  Radio,
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

import {
  getProductDetailAction,
  getCommentListAction,
  postCommentAction,
  addToCartAction,
  updateCartAction,
  postFavoriteAction,
  removeFavoriteAction,
  getFavoriteListAction,
} from "../../../redux/actions";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import { ROUTER } from "../../../constants/router";

import * as S from "./styles";

const ProductDetailPage = ({ match, ...props }) => {
  const id = match.params?.id;

  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const { productList, productDetail } = useSelector(
    (state) => state.productReducer
  );

  const history = useHistory();

  const { commentList } = useSelector((state) => state.commentReducer);
  const { cartList } = useSelector((state) => state.cartReducer);
  const { userInfo } = useSelector((state) => state.authReducer);
  // const { favoriteList } = useSelector((state) => state.favoriteReducer);
  // console.log(favoriteList);

  const [commentForm] = Form.useForm();

  const { category } = productDetail.data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAction({ id }));
      dispatch(getCommentListAction({ productId: parseInt(id) }));
      dispatch(
        getFavoriteListAction({
          userId: userInfo.data.id,
          // productId: parseInt(id),
        })
      );
    }
  }, [id]);

  const productRate = useMemo(() => {
    let total = 0;
    if (!commentList.data.length) return 0;

    commentList.data.forEach((commentItem) => {
      total = total + commentItem.rate;
    });
    return (total / commentList.data.length).toFixed(1);
  }, [commentList.data]);

  const handleAddToCart = () => {
    if (userInfo.data.id) {
      //check product nay da co trong cartList chua -> thong bao sp da co trong cart
      // const isExist =
      //  cartList.data.findIndex((cartItem) => cartItem.productId === parseInt(id) ) !== -1

      // lay ra object product neu product nay da co trong cartList(vi can quantity cua product nay) -> update cart

      if (productDetail.data.productOptions?.length) {
        if (!selectedOption) {
          notification.error({
            message: "Please select a bottle size!",
          });
        } else {
          const existCartProductOption = cartList.data.find(
            (cartItem) => cartItem.productOptionId === selectedOption.id
          );
          if (existCartProductOption) {
            dispatch(
              updateCartAction({
                data: {
                  quantity: existCartProductOption.quantity + productQuantity,
                  id: existCartProductOption.id,
                },
                callback: {
                  showSuccess: () =>
                    notification.success({
                      description: "Added to Bag",
                    }),
                },
              })
            );
          } else {
            dispatch(
              addToCartAction({
                userId: userInfo.data.id,
                productId: parseInt(id),
                quantity: productQuantity,
                productOptionId: selectedOption.id,
              })
            );
          }
        }
      } else {
        const existCartProduct = cartList.data.find(
          (cartItem) => cartItem.productId === parseInt(id)
        );
        if (existCartProduct) {
          dispatch(
            updateCartAction({
              data: {
                quantity: existCartProduct.quantity + productQuantity,
                id: existCartProduct.id,
              },
              callback: {
                showSuccess: () =>
                  notification.success({
                    description: "Added to Bag",
                  }),
              },
            })
          );
        } else {
          dispatch(
            addToCartAction({
              userId: userInfo.data.id,
              productId: parseInt(id),
              quantity: productQuantity,
              productOptionId: false,
            })
          );
        }
      }
    } else {
      notification.warning({
        description: "Please Sign In for more services!",
      });
    }
  };

  const getProductOptions = useMemo(() => {
    if (productDetail.data.productOptions?.length) {
      return productDetail.data.productOptions.map((option) => {
        return (
          <Radio key={option.id} value={option}>
            <S.ProductSizeLabel> {option.name}</S.ProductSizeLabel>
          </Radio>
        );
      });
    }
  }, [productDetail.data]);

  const handleSubmitComment = (values) => {
    // const isExist =
    //   commentList.data.findIndex((item) => item.userId === userInfo.data.id) !== -1;
    // if(isExist) {
    //   notification.warning({
    //     message: "You already comment"
    //   })
    // } else {
    //   dispatch(postCommentAction({
    //     ...values,
    //     productId: parseInt(id),
    //     userId: userInfo.data.id,
    //   }))
    // }
    dispatch(
      postCommentAction({
        ...values,
        productId: parseInt(id),
        userId: userInfo.data.id,
      })
    );
    commentForm.resetFields();
  };

  const isFavorite =
    productDetail.data.favorites?.findIndex(
      (favoriteItem) => favoriteItem.userId === userInfo.data.id
    ) !== -1;

  const handleFavoriteProduct = () => {
    if(userInfo.data.id) {
      if (isFavorite) {
        const existFavoriteProduct = productDetail.data.favorites?.find(
          (favoriteItem) => favoriteItem.userId === userInfo.data.id
        );
        dispatch(removeFavoriteAction({ id: existFavoriteProduct.id}))
      } else {
        dispatch(
          postFavoriteAction({
            userId: userInfo.data.id,
            productId: parseInt(id),
          })
        );
      }
    } else {
      notification.warning({
        message: "Please Sign In for more services!"
      })
    }
    
  };

  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", color: "#000" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function PrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", color: "#000" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    // nextArrow: true,
    // prevArrow: true
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const renderRelatedProduct = () => {
    return productList.data.map((productItem, productIndex) => (
      <S.ProductCard 
      onClick={() => history.push(
        generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: productItem.id })
      )}
      >
        {productItem.isBestSeller && <S.BestSeller>Best Seller</S.BestSeller>}
        <img src={productItem.image} alt="" />
        <S.ProductRelativeName>{productItem.name}</S.ProductRelativeName>
        <S.ProductRelativePrice>{`$${productItem.price}`}</S.ProductRelativePrice>
      </S.ProductCard>
    ));
  };

  const arrOfImages = [
    productDetail.data.image,
    productDetail.data.image2,
    productDetail.data.image3,
    productDetail.data.image4,
  ];

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow />
  };

  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModalAndSetIndex = (index) => {
    setIndexOfImages(index);
    setShowModal(true);
    return;
  };

  return (
    <div>
      <TopWrapper
        breadcrumb={[
          ...BREADCRUMB,
          {
            title: productDetail.data.name,
          },
        ]}
      />

      <S.ProductDetailContainer>
        <S.ProductDetailWrapper>
          <Row gutter={[16, 16]}>
            <S.ImgCol
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 14 }}
            > 
              {productDetail.loading ? (
                <S.SkeletonImage>
                  <Skeleton.Image />
                </S.SkeletonImage>
              ) : ( 
                // <img
                //   src={productDetail.data.image}
                //   alt=""
                // />
                <Slider {...setting}>
                {arrOfImages.map((image, index) => (
                  <S.ImageWrapper>
                  <S.ImageContent
                    key={image}
                    // style={{ height: "auto", maxWidth: "100%" }}
                    src={image}
                    alt={image}
                  />
                  </S.ImageWrapper>
                ))}
              </Slider>
              )}
              
              <div>
              <S.ImgLightBox>
                {arrOfImages.map((image, index) => (
                  <img
                    key={image}
                    style={{ height: "100px", width: "100px", margin: "20px" }}
                    src={image}
                    alt={image}
                    onClick={() => openModalAndSetIndex(index)}
                  />
                ))}
              </S.ImgLightBox>
                {showModal && (
                  <Lightbox
                    mainSrc={arrOfImages[indexOfImages]}
                    nextSrc={
                      arrOfImages[(indexOfImages + 1) % arrOfImages.length]
                    }
                    prevSrc={
                      arrOfImages[
                        (indexOfImages + arrOfImages.length - 1) %
                          arrOfImages.length
                      ]
                    }
                    onCloseRequest={() => setShowModal(false)}
                    onMovePrevRequest={() =>
                      setIndexOfImages(
                        (indexOfImages + arrOfImages.length - 1) %
                          arrOfImages.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setIndexOfImages(
                        (indexOfImages + arrOfImages.length + 1) %
                          arrOfImages.length
                      )
                    }
                  />
                )}
              </div>
            </S.ImgCol>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 10 }}
            >
              {productDetail.loading ? (
                <Skeleton active />
              ) : (
                <S.ProductInfo>
                <S.ProductName>{productDetail.data.name}</S.ProductName>
                <S.ProductType>Family: {category?.name}</S.ProductType>
                <S.ProductDescription
                  dangerouslySetInnerHTML={{
                    __html: productDetail.data.description,
                  }}
                />

                <S.SizeWrapper style={{marginBottom: "30px"}}>
                  {productDetail.data.productOptions?.length > 0 && (
                    <S.ProductSize>
                      <h4>Select Size:</h4>
                      <Radio.Group
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        {getProductOptions}
                      </Radio.Group>
                    </S.ProductSize>
                  )}
                  
                </S.SizeWrapper>

                <S.SizeWrapper>
                <InputNumber
                    // style={{ width: 60 }}
                    size="large"
                    min={1}
                    max={10}
                    value={productQuantity}
                    onChange={(value) => setProductQuantity(value)}
                  />
                  <S.ProductPrice>
                    {selectedOption
                      ? `$${
                          selectedOption.price + (productDetail.data.price || 0)
                        }`
                      : `$${productDetail.data.price}`}
                  </S.ProductPrice>
                  </S.SizeWrapper>
                  <div className="space-wrapper">
                    <Row gutter={[16, 8]}>
                      <Col 
                         xs={{ span: 24 }}
                         sm={{ span: 24 }}
                         md={{ span: 12 }}
                         lg={{ span: 12 }}
                      >
                      <Button
                        size="large"
                        block
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        onClick={() => handleAddToCart()}
                      >
                        ADD TO BAG
                      </Button>
                      </Col>
                      <Col 
                         xs={{ span: 24 }}
                         sm={{ span: 24 }}
                         md={{ span: 12 }}
                         lg={{ span: 12 }}
                      >
                      <Button
                        // style={{ marginLeft: "12px" }}
                        size="large"
                        block
                        icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                        onClick={() => handleFavoriteProduct()}
                      >WISHLIST</Button>
                      </Col>
                    </Row>
                  </div>

                <S.ProductPolicy>
                  <li>Free returns</li>
                  <li>Receive a sample of your fragrance with your order</li>
                  <li>Complimentary shipping on all orders</li>
                  <li>Complimentary Diptyque gift-wrapping</li>
                </S.ProductPolicy>
              </S.ProductInfo>
              )}
              
            </Col>
          </Row>
        </S.ProductDetailWrapper>
        <S.ReviewWrapper>
          <Row>
            <Col 
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 14 }}
            >
              <S.InfoWrapper>
                <S.Title>Did you know?</S.Title>
                <S.InfoContent
                  dangerouslySetInnerHTML={{
                    __html: productDetail.data.content,
                  }}
                />
                <S.InfoMaterial>
                  <h4>RAW MATERIALS</h4>
                  <p>{productDetail.data.material}</p>
                </S.InfoMaterial>
              </S.InfoWrapper>
            </Col>
            <Col 
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 10 }}
            >
              <S.Review>
                <Collapse
                  bordered={false}
                  // defaultActiveKey={['1']}
                  expandIconPosition="right"
                >
                  <Collapse.Panel
                    header={
                      <S.CollapseHeader>
                        <span>{`Reviews (${commentList.data.length})`}</span>
                        <Rate
                          allowHalf
                          disabled
                          value={productRate}
                          style={{ fontSize: 14, color: "#333" }}
                        />
                      </S.CollapseHeader>
                    }
                    key="1"
                  >
                    {userInfo.data.id && (
                      <Form
                        form={commentForm}
                        layout="vertical"
                        initialValues={{ rate: 0, content: "" }}
                        onFinish={(values) => handleSubmitComment(values)}
                      >
                        <Form.Item
                          label={<S.LabelText>Rate</S.LabelText>}
                          name="rate"
                          rules={[{ required: true, message: "Required !" }]}
                        >
                          <Rate
                            style={{ fontSize: 14, color: "#333" }}
                            allowHalf
                          />
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
                    )}
                    <div
                      style={{
                        marginTop: 14,
                        borderTop: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      <List
                        className="comment-list"
                        header={
                          <S.CommentsTitle>
                            <Rate
                              allowHalf
                              disabled
                              value={productRate}
                              style={{ fontSize: 16, color: "#333" }}
                            />
                            {!!productRate && <h3>{productRate}</h3>}
                          </S.CommentsTitle>
                        }
                        itemLayout="horizontal"
                        dataSource={commentList.data}
                        renderItem={(item) => (
                          <S.CommentList>
                            <Comment
                              author={item.user?.name}
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
                                  <S.CommentContent>
                                    {item.content}
                                  </S.CommentContent>
                                </>
                              }
                              datetime={moment(item.createdAt).fromNow()}
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
      </S.ProductDetailContainer>

      <h4
        style={{ fontSize: "30px", marginBottom: "12px", textAlign: "center", fontFamily: "'Philosopher'" }}
      >
        You may also like
      </h4>
      <S.RelativeProduct>
        <S.SlideWrapper>
          <Slider {...settings}>{renderRelatedProduct()}</Slider>
        </S.SlideWrapper>
      </S.RelativeProduct>
    </div>
  );
};

export default ProductDetailPage;

