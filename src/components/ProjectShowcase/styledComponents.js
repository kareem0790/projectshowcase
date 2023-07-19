import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #f1f5f9;
`
export const HeaderContainer = styled.div`
  background-color: #cbd5e1;
  height: 60px;
  padding: 10px;
`
export const WebsiteLogo = styled.img`
  width: 120px;
  margin-left: 30px;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 20px;
`
export const Select = styled.select`
  padding: 10px;
  height: 40px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  width: 30%;
  font-size: 14px;
  color: #475569;
  margin-bottom: 20px;
`
export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const FailureViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: #475569;
  font-weight: 600;
`
export const FailureContent = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #475569;
`
export const RetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  padding: 8px 16px 8px 16px;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
`
