import React from 'react';
import styled from 'styled-components';

const Card = ({ technologies }) => {
  return (
    <div className='grid grid-cols-4 mt-[3%] pl-[3%]'>
      {technologies.map((technology,idx) => (
        <StyledWrapper key={idx}>
          <div className="card" >
            <img src={technology.svg} alt={technology.name} className="w-12 h-12" />
            <div className="card__content">
              <p className="card__title">{technology.name}
              </p><p className="card__description">{technology.about}</p>
            </div>
          </div>
        </StyledWrapper>
      ))}
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 400px;
    height: 200px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }

  .card:hover Icon {
    scale: 0;
    transform: rotate(-45deg);
  }`;

export default Card;
