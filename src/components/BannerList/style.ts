import styled from "styled-components";
import {
  flexWrap,
  FontStyle,
  SizeWH,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";
import { commonSection, subTitle } from "Assets/CommonStyle";

export const BannerListSection = styled.section`
  ${commonSection}
`;

export const BannerListTitle = styled.h3`
  ${subTitle}
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