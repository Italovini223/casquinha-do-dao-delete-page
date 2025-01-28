import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  
 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 50%;
  padding: 70px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

