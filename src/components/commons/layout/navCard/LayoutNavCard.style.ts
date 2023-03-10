import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 10px;
`;
export const Herosection = styled.div`
  align-items: center;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
  width: 1600px;
  border-radius: 10px;
`;

export const Cardgrid = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0px;
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
  display: flex;
  height: 500px;
`;

export const Card = styled.div`
  list-style: none;
  position: relative;
  width: 281px;
  margin: 20px;
  display: flex;
  transition: 1s;
  cursor: pointer;
  :before {
    content: "";
    display: block;
    padding-bottom: 150%;
    width: 100%;
  }
  :not(:hover) {
    transform: scale(1.05) translateZ(0);
    transition: 1s;
  }
`;

export const Cardbackground = styled.img`
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
  margin: 10px;
  width: 281px;
  height: 350px;
  left: -10px;
  top: -10px;
  border-radius: 10px;
  :not(:hover) {
    filter: brightness(0.5) saturate(1) contrast(1.5);
  }
`;

export const Cardcontent = styled.div`
  left: 0;
  padding: var(--spacing-l);
  height: 50px;
  position: absolute;
  top: 0;
`;

export const Cardcategory = styled.p`
  position: relative;
  right: 10px;
  top: 10px;
  color: white;
  opacity: 0.5;
  font-size: 0.9rem;
  text-align: center;
  text-transform: uppercase;
`;

export const Cardheading = styled.h3`
  color: white;
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  word-spacing: 100vw;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 8px;
  top: -10px;

  /* :not(:hover) {
    filter: brightness(1) saturate(1) contrast(1);
  } */
  /* hover: {
    filter: brightness(1) saturate(1) contrast(1);
  } */
`;
