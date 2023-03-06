import styled from "styled-components";
import {
  flexWrap,
  FontStyle,
  SizeWH,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const BannerListSection = styled.section`
  @media (min-width: ${width.minMobile}) {
    padding: 100px 50px 0;
  }

  @media (max-width: ${width.mobile}) {
    padding: 60px 20px 0;
  }
`;

export const BannerListArea = styled.div`
  overflow: hidden;
`;
export const BannerListGroup = styled.ul`
  ${flexWrap}

  > li {
    overflow: hidden;
  }

  @media (min-width: ${width.minMobile}) {
    margin: -20px;

    > li {
      width: calc((100% - 80px) / 2);
      margin: 20px;
      border-radius: 20px;
    }
  }

  @media (max-width: ${width.mobile}) {
    margin: -10px;

    > li {
      width: calc((100% - 40px) / 2);
      margin: 10px;
      border-radius: 10px;
    }
  }
`;

export const BannerListTitle = styled.h3`
  ${FontStyle(40, 700, color.black, "1")}
  padding-bottom: 40px;

  @media (max-width: ${width.mobile}) {
    padding-bottom: 20px;
    font-size: 28px;
  }
`;

export const BannerBtnMore = styled.button`
  border: 1px solid ${color.line};

  span {
    ${FontStyle(16, 400, color.black, "1")}
    margin-left: 10px;
  }

  @media (min-width: ${width.minMobile}) {
    ${SizeWH("100%", "60px")}

    margin-top: 40px;
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("100%", "50px")}

    margin-top: 20px;
    border-radius: 10px;

    span {
      font-size: 14px;
    }
  }
`