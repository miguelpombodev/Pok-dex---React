import styled from "styled-components";

import { typesVariation } from "../../Styles/PokeTypesVariation";

interface PokeTypesProps {
  pokeType: string;
}

export const Container = styled.div`
  margin: 100px 15px;
  display: flex;
  width: 90vw;
  flex-direction: column;
  justify-content: center;

  > svg {
    position: absolute;
    top: 7rem;
    left: 1rem;
    cursor: pointer;
  }
`;

export const AttributesContent = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PokePortrait = styled.div`
  display: flex;
  width: 310px;
  height: 310px;
  border: 5px #c9aa71 solid;
  border-radius: 10px;
  justify-content: center;
  background-color: #ededed;

  img {
    height: 100%;
  }
`;

export const PokeAttributes = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const PokeName = styled.div`
  display: flex;
  margin-bottom: 20px;

  h1 {
    font-size: 50px;
  }

  small {
    font-size: 20px;
    color: #9c8457;
  }
`;

export const PokeTypes = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
`;

export const Types = styled.span<PokeTypesProps>`
  align-items: center;
  background-color: ${(props) => typesVariation[props.pokeType]};
  border-radius: 8px;
  color: #ffff;
  display: flex;
  font-family: "Press Start 2P", cursive;
  font-size: 15px;
  font-weight: bold;
  height: 50px;
  justify-content: center;
  padding: 11px;
  text-align: center;
  width: 137px;

  & + span {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin: 0;
    width: 110px;
  }
`;

export const PokeWeightHeight = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
  margin-left: 35px;

  @media (max-width: 768px) {
    margin-left: 13px;
  }
`;

export const WeightHeight = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "Press Start 2P", cursive;
`;

export const PokePhysics = styled.div`
  display: flex;
`;

export const PokeStats = styled.div`
  margin-top: 20px;
  display: grid;

  p {
    font-family: "Press Start 2P", cursive;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const PokeAbilities = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
