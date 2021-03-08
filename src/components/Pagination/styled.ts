import styled from 'styled-components';
import ArrowLeftIcon from '../svg/arrow-left.svg';
import ArrowLeftIconDisabled from '../svg/arrow-left-disabled.svg';
import ArrowRightIcon from '../svg/arrow-right.svg';
import ArrowRightIconDisabled from '../svg/arrow-right-disabled.svg';


export const PaginationWrapper = styled.div`
 width: 100%;
 padding: 10px;

 @media screen and (min-width: 550px) {
  display: flex;
  justify-content: flex-end;
 }
`
export const ButtonsWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

 @media screen and (min-width: 550px) {
  display: block;
 }
`
 
export const PreviousButton = styled.button`
  width: 85px;
  height: 27px;
  outline: none;
  border: none;
  background-color: #1DA1F2;
  background-image: url(${ArrowLeftIcon});
  background-size: 10px 10px;
  background-repeat: no-repeat;
  background-position: left 5px center;
  cursor: pointer;
  font-size: 12px;
  border-radius: 5px;
  color: #fff;
  margin-right: 10px;

  &:hover {
   background-color: #0a76b9;
  }

  &:disabled {
    background-color: #bbb;
    background-image: url(${ArrowLeftIconDisabled});
    color: #4f4f4f;
  }
`
export const NextButton = styled.button`
  width: 85px;
  height: 27px;
  outline: none;
  border: none;
  background-color: #1DA1F2;
  background-image: url(${ArrowRightIcon});
  background-size: 10px 10px;
  background-repeat: no-repeat;
  background-position: right 5px center;
  cursor: pointer;
  font-size: 12px;
  border-radius: 5px;
  color: #fff;
  margin-left: 10px;

  &:hover {
    background-color: #0a76b9;
  }

  &:disabled {
    background-color: #bbb;
    background-image: url(${ArrowRightIconDisabled});
    color: #4f4f4f;
  }
`

export const PageContent = styled.span`
  font-size: 16px;
`

export const LimitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (min-width: 550px) {
    display: block;
    margin-top: 0;
    margin-left: 20px; 
  }
`

export const LimitSelector = styled.select`
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid #828282;

  &:focus {
    outline: none;
  }
`