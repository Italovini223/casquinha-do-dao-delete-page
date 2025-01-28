import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export  const Label = styled.span`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  display: block;
  padding: 10px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 5px;
  text-align: center;
  margin-top: 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`;