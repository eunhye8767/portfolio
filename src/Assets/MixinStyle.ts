import { css } from "styled-components";

export const ScreenOut = css`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 0 !important;
  height: 0 !important;
  line-height: 0 !important;
  overflow: hidden !important;
  text-indent: -9999px !important;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAlignCen = css`
  display: flex;
  align-items: center;
`;

export const FlexAlignEnd = css`
  display: flex;
  align-items: flex-end;
`;

export const FlexJustCen = css`
  display: flex;
  justify-content: center;
`;
export const FlexJustStart = css`
  display: flex;
  justify-content: flex-start;
`;

export const FlexJustEnd = css`
  display: flex;
  justify-content: flex-end;
`;

export const FlexJustBet = css`
  display: flex;
  justify-content: space-between;
`;

export const FlexWrap = css`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FontStyle = (
  size = 16,
  weight = "400",
  color = "#000",
  lineH = "1.6",
  spac = "0.06"
) => css`
  font-size: ${size * 0.1}rem;
  font-weight: ${weight};
  font-style: normal;
  color: ${color};
  line-height: ${lineH};
  letter-spacing: ${spac}em;
`;

export const SizeWH = (width = "100%", height = width) => css`
  width: ${width};
  height: ${height};
`;

export const Ellipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MultiEllipsis = (
  size = 16,
  lineH = 16,
  lines = 2,
  weight = "400",
  color = "#000"
) => css`
  display: -webkit-box;
  max-height: ${lineH * lines};
  font-size: ${size * 0.1}rem;
  font-weight: ${weight};
  color: ${color};
  line-height: ${lineH};
  overflow: hidden;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  /* autoprefixer: off */
`;

export const ObjFitCover = css`
  ${SizeWH("100%")}
  
  object-fit: cover;
  object-position: 50% 50%;
`;
