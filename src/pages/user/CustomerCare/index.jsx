import React from "react";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";

import { Row, Col } from "antd";
import { CommentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import * as S from "./styles";

const CustomerCare = () => {
  return (
    <div>
      <TopWrapper breadcrumb={BREADCRUMB} />
      <S.PageContainer>
        <S.BoxWrapper>
            <S.BoxHeader>Didn't find what you're looking for?</S.BoxHeader>
            <S.BoxRow >
              <S.BoxCol 
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <CommentOutlined style={{ fontSize: '110px'}}/>
                <S.ColText>Chat with us</S.ColText>
              </S.BoxCol>
              <S.BoxCol 
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <MailOutlined style={{ fontSize: '110px'}}/>
                <S.ColText> Send us a message</S.ColText>
                <span>CUSTOMERSERVICE@DIPTYQUE.US</span>
              </S.BoxCol>
              <S.BoxCol 
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <PhoneOutlined style={{ fontSize: '110px'}}/>
                <S.ColText>Call us</S.ColText>
                <span> +1 (833) 798-0845</span>
              </S.BoxCol>
            </S.BoxRow>
        </S.BoxWrapper>
      </S.PageContainer>
    </div>
  );
};

export default CustomerCare;
