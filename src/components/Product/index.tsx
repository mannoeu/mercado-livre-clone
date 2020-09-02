import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto como esperado ou devolvemos o seu dinheiro.
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni
      officiis, autem neque ab facere, natus nisi dolores architecto facilis
      voluptatem quaerat fuga nam iure. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Blanditiis dolor labore beatae, corporis ab impedit esse
      mollitia autem sed inventore?
      <br />
      <br />
      itens inclusos: <br />
      - 1x Camisa 100% algodão - 1x Embalagem
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur velit
      a, cumque possimus quibusdam mollitia!
    </p>
  </Description>
);

export default Product;
