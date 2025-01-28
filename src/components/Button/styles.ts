import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  text-align: center;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;