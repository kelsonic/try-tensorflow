// Node modules.
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  width: 100%;

  .logo {
    height: 32px;
    margin: 50px 0 0;
    width: 143px;
  }

  p {
    margin: 40px 0 50px;
  }

  .dropzone {
    border-radius: 5px;
    color: #545454;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    padding: 100px 20px;
    max-width: 600px;
  }

  .uploaded-image {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 50px 0 0;

    img {
      border-radius: 3px;
      max-height: 80px;
      max-width: 80px;
    }

    p {
      color: #545454;
      font-size: 0.8rem;
      margin: 10px 0 0;
      text-align: center;
    }

    ul {
      margin: 20px 0;

      li {
        color: #545454;
        font-size: 0.8rem;
        margin: 0 0 10px;
        list-style: none;
        text-align: center;

        &:nth-of-type(1) {
          font-size: 1rem;
          font-weight: 600;
        }

        &:nth-of-type(2) {
          font-weight: 500;
        }
      }
    }
  }
`;
