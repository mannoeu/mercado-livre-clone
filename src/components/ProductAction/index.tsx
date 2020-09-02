import React, { useState } from "react";

import {
  Container,
  Condition,
  HeartIcon,
  Row,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  const [likeIt, setLikeIt] = useState(false);

  return (
    <Container>
      <Condition>Novo | 9 vendidos</Condition>
      <Row>
        <h1>Camiseta branca 100% algodão</h1>
        <HeartIcon like={likeIt} onClick={() => setLikeIt(!likeIt)} />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que espera ou devolvemos o seu
            dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
