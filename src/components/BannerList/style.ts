import styled from "styled-components";
import { flexWrap } from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";
import { commonSection, subTitle, moreBtn } from "Assets/CommonStyle";

export const BannerListSection = styled.section`
  ${commonSection}
`;

export const BannerListTitle = styled.h3`
  ${subTitle}
`;

export const BannerBtnMore = styled.button`
  ${moreBtn}
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
