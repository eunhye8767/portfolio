import styled from "styled-components";
import {
  flexCenter,
  flexColumn,
  flexJustCen,
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
`;
