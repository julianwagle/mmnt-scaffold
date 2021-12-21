import React from 'react';
import { CardBody, Card, Row } from 'reactstrap';
import ProductGrid from '../e-commerce/product/ProductGrid';
import CustomCardHeader from '../common/CustomCardHeader';
import products from '../../data/e-commerce/products';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ProductGridWidgets = () => (
  <Card className="mt-3">
    <CustomCardHeader title="Products" />
    <CardBody className="">
      <Row>
        {products.slice(0, 3).map((product, index) => {
          return <ProductGrid {...product} sliderSettings={sliderSettings} lg={4} key={index} />;
        })}
      </Row>
    </CardBody>
  </Card>
);

export default ProductGridWidgets;
