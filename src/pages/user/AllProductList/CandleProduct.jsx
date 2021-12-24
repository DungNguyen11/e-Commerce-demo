import React, {useState, useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useHistory } from 'react-router';

import TopWrapper from "../../../components/TopWrapper";

import {Row, Col, Collapse, Checkbox, Slider, Input, Select, Space, Tag} from 'antd';
import * as S from './styles';

import { PAGE_SIZE } from "../../../constants/pagination";

import { getProductListAction, getCategoryListAction } from '../../../redux/actions';

import { DEFAULT_PRICE_FILTER } from "./constants";
import { ROUTER } from '../../../constants/router';

import { HomeOutlined } from "@ant-design/icons"

const CandleProductPage = () => {

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [keywordFilter, setKeywordFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(DEFAULT_PRICE_FILTER);
  const [sortFilter, setSortFilter] = useState("");
  
  const { productList } = useSelector((state) => state.productReducer);
  const { categoryList } = useSelector((state) => state.categoryReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction({ limit: PAGE_SIZE.USER_PRODUCT, page: 1, type: "candle"}))
    dispatch(getCategoryListAction());
  }, [])

  const handleSearchKeyword = (e) => {
    setKeywordFilter(e.target.value);
    dispatch(getProductListAction({
      limit: PAGE_SIZE.USER_PRODUCT, 
      page: 1,
      priceFilter,
      keyword: e.target.value,
      sortFilter,
      categoryFilter, 
      type: "candle"
    }))
  }

  const handleClearKeyword = () => {
    setKeywordFilter('');
    dispatch(getProductListAction({
      limit: PAGE_SIZE.USER_PRODUCT, 
      page: 1,
      priceFilter,
      keyword: "",
      sortFilter,
      categoryFilter,
      type: "candle"
    }))
  }

  const handleSelectCategoryFilter = (e) => {
    const { value, checked } = e.target;
    const newCategoryFilter = checked
      ? [...categoryFilter, value]
      : categoryFilter.filter((filterItem) => filterItem.id !== value.id);
    
    setCategoryFilter(newCategoryFilter);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter: newCategoryFilter,
        priceFilter,
        keyword: keywordFilter,
        sortFilter,
        type: "candle"
      })
    );
  };

  const handleClearCategoryFilter = (categoryFilterItem) => {
    const newCategoryFilter = categoryFilter.filter((filterItem) => filterItem.id !== categoryFilterItem.id)
    setCategoryFilter(newCategoryFilter);
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: 1,
        categoryFilter: newCategoryFilter,
        priceFilter,
        keyword: keywordFilter,
        sortFilter,
        type: "candle"
      })
    );
  };
  
  const handleChangePriceFilter = (value) => {
    setPriceFilter(value);
    dispatch(getProductListAction({
      limit: PAGE_SIZE.USER_PRODUCT, 
      page: 1,
      priceFilter: value,
      keyword: keywordFilter,
      sortFilter,
      categoryFilter,
      type: "candle"
    }))
  }

  const handleClearPriceFilter = () => {
    setPriceFilter(DEFAULT_PRICE_FILTER);
    dispatch(getProductListAction({
      limit: PAGE_SIZE.USER_PRODUCT, 
      page: 1,
      priceFilter: DEFAULT_PRICE_FILTER,
      keyword: keywordFilter,
      sortFilter,
      categoryFilter,
      type: "candle"
    }))
  }

  const handleChangeSort = (value) => {
    setSortFilter(value);
    dispatch(getProductListAction({
      limit: PAGE_SIZE.USER_PRODUCT, 
      page: 1,
      priceFilter,
      keyword: keywordFilter,
      sortFilter: value,
      categoryFilter,
      type: "candle"
    }))
  }

  const handleClearSort = (value) => {
    setSortFilter("");
    dispatch(getProductListAction({
      limit: PAGE_SIZE.USER_PRODUCT, 
      page: 1,
      priceFilter: value,
      keyword: keywordFilter,
      sortFilter: "",
      categoryFilter,
      type: "candle"
    }))
  }

  const handleLoadMore = () => {
    dispatch(
      getProductListAction({
        limit: PAGE_SIZE.USER_PRODUCT,
        page: productList.meta.page + 1,
        more: true,
        priceFilter,
        keyword: keywordFilter,
        sortFilter,
        categoryFilter,
        type: "candle"
      })
    )
  }

  const renderCategoryList = useMemo(() => {
    return categoryList.data.map((categoryItem) => { 
     const checked = 
      categoryFilter.findIndex((filterItem) => filterItem.id === categoryItem.id ) !== -1;
      return (
        <S.CheckboxWrapper key={categoryItem.id}>
          <Checkbox
            value={categoryItem}
            checked={checked}
            onChange={(e) => handleSelectCategoryFilter(e) }
          >
            {categoryItem.name}
          </Checkbox>
        </S.CheckboxWrapper>
      )
    })
  }, [categoryList.data, categoryFilter])

  const renderCategoryFilterTags = useMemo(() => {
    return categoryFilter.map((categoryFilterItem, categoryFilterIndex) => 
       (
        <Tag
          key={categoryFilterIndex}
          closable
          onClose={() => handleClearCategoryFilter(categoryFilterItem)}
        >
          {categoryFilterItem.name}
        </Tag>
      )
    )
  }, [categoryFilter])

  const renderProductList = useMemo(() => {
    return productList.data.map((productItem, productIndex) => (
      <Col 
        key={productIndex}
        xs={{ span: 12 }} 
        sm={{ span: 8 }} 
        md={{ span: 8 }} 
        lg={{ span: 8}}
      >
        <S.ProductCard 
          onClick={() => history.push(
            generatePath(ROUTER.USER.PRODUCT_DETAIL, { id: productItem.id })
          )}
        >
          {(productItem.isBestSeller) && <S.BestSeller>Best Seller</S.BestSeller>}
          <img src={productItem.image} alt="" />
          <S.ProductName>{productItem.name}</S.ProductName>
          <S.ProductPrice>{`$${productItem.price}`}</S.ProductPrice>
        </S.ProductCard>
      </Col>
    ))
  }, [productList.data])

  return (
    <div>
      <TopWrapper  breadcrumb={[
          {
            title: "Home",
            path: "/",
            icon: <HomeOutlined />,
          },
          {
            title: "Scented Candles",
            path: "/products/candle",
          },
        ]} />
      <S.ProductListContainer>
        <S.PageTitle>
          <h2>SCENTED CANDLES</h2>
        </S.PageTitle>
        <Row gutter={24}>
          <Col 
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 6 }}>
            <Collapse 
              style={{marginBottom: "16px"}}
              // ghost
              bordered={false} 
              expandIconPosition='right'
            >
              <Collapse.Panel 
                header={<S.CollapseHeader>Category</S.CollapseHeader>}
                key='1' 
              >
                {renderCategoryList}
              </Collapse.Panel>          
            
              {/* <Collapse.Panel 
                header={<S.CollapseHeader>size</S.CollapseHeader>}
                key="2">
                <Checkbox></Checkbox>
              </Collapse.Panel>
               */}
              <Collapse.Panel 
                header={<S.CollapseHeader>Price</S.CollapseHeader>}
                key="2">
                <Slider
                  range
                  min={DEFAULT_PRICE_FILTER[0]}
                  max={DEFAULT_PRICE_FILTER[1]}
                  step={10}
                  value={priceFilter}
                  tipFormatter={(value) => `$${value}`}
                  onChange={(value) => handleChangePriceFilter(value)}
                />
              </Collapse.Panel>
            </Collapse>     
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 18 }}
          >
            <Row gutter={16}>
            <Col 
               xs={{ span: 16 }}
               sm={{ span: 16 }}
               md={{ span: 16 }}
               lg={{ span: 18 }}
            >
              <Input
                placeholder="Search"
                value={keywordFilter}
                onChange={(e) => handleSearchKeyword(e)}
              />
              </Col>
              <Col 
                xs={{ span: 8 }}
                sm={{ span: 8 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
              >
                <Select
                  style={{ width: "100%" }}
                  placeholder="Sort By"
                  allowClear
                  onChange={(value) => handleChangeSort(value)}
                >
                  <Select.Option value="asc">Price: Low-High</Select.Option>
                  <Select.Option value="desc">Price: High-Low</Select.Option>
                </Select>
              </Col>
            </Row>
            <Space style={{ marginTop: 16 }}>
              {categoryFilter.length > 0 && renderCategoryFilterTags}
              {keywordFilter && (
                <Tag closable onClose={() => handleClearKeyword()}>
                  {keywordFilter}
                </Tag>
              )}
              {(priceFilter[0] !== DEFAULT_PRICE_FILTER[0] || 
              priceFilter[1] !== DEFAULT_PRICE_FILTER[1]) && (
                <Tag closable onClose={() => handleClearPriceFilter()}>
                {`$${priceFilter[0]} - $${priceFilter[1]}`}
              </Tag>
              )}
              {(sortFilter && (
                <Tag closable onClose={() => handleClearSort()}>
                {`Price ${ sortFilter === 'desc' ? "High-Low" : "Low-High"}`}
              </Tag>
              ))}
            </Space>
            <Row gutter={[16, 24]} style={{marginTop: 30}}>
                {renderProductList}
            </Row>
            {productList.meta.total !== productList.data.length && (
              <Row justify='center'>
                <S.Button>
                  <span onClick={() => handleLoadMore()}> 
                  View more
                  </span>
                </S.Button>
              </Row>
            )}
          </Col>
        </Row>
      </S.ProductListContainer>
    </div>
  )
}

export default CandleProductPage
