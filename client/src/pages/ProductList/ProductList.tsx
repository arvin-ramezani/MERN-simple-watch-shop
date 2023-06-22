import { Button, Grid, LinearProgress, Zoom } from '@mui/material';
import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../component/Navbar/Navbar';
import Product from '../../component/Product/Product';
import { IProductListParams } from '../../interfaces/interfaces';
import {
  fetchProductsAsync,
  fetchProductsByCategoryAsync,
  selectProducts,
} from '../../features/products/productsSlice';
import { FilterBlock, LinkStyles, ProductsWrapper } from './styles';
import { RootState } from '../../app/store';
import { selectCart } from '../../features/cart/cartSlice';

const ProductList: FC = () => {
  const { cartQuantity } = useSelector(selectCart);
  const { status } = useSelector(selectProducts);
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const { category } = useParams<IProductListParams>();

  // For Animattion Delay
  let transitionDelay: number = 0;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (category) {
      dispatch(fetchProductsByCategoryAsync(category));
    } else {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, category]);

  return (
    <div>
      <Navbar />
      <FilterBlock>
        <Button
          variant='contained'
          color='secondary'
          disabled={cartQuantity === 0}
        >
          <Link
            style={LinkStyles}
            to='/cart'
          >
            Checkout
          </Link>
        </Button>
        <Button
          variant='outlined'
          disabled
        >
          Filters
        </Button>
      </FilterBlock>
      {status === 'loading' && <LinearProgress />}
      <ProductsWrapper
        justifyContent='center'
        container
        py={3}
      >
        {products?.map((product) => {
          transitionDelay += 0.4;
          return (
            <Zoom
              in
              key={product._id}
              style={{ transitionDelay: `${transitionDelay}s` }}
            >
              <Grid
                item
                m={1}
                sm={5}
                md={3}
              >
                <Product
                  img={product.img}
                  desc={product.desc}
                  name={product.name}
                  _id={product._id}
                  price={product.price}
                  categories={product.categories}
                />
              </Grid>
            </Zoom>
          );
        })}
      </ProductsWrapper>
    </div>
  );
};

export default ProductList;
