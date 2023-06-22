import { FC, useState } from 'react';

import { IProduct } from '../../interfaces/interfaces';
import TransitionsModal from '../Modal/Modal';
import { Wrapper, Image, Info, Desc, Categories } from './styles';

const Product: FC<IProduct> = ({ img, name, desc, price, categories, _id }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => setOpenModal(true);

  return (
    <>
      <Wrapper onClick={handleModal}>
        <Image
          src={img}
          alt={name}
        />
        <Info>
          <h3>{name}</h3>
          <Desc>{desc}</Desc>
          <div>${price}</div>
          <Categories>
            Categories:
            {categories?.map((cat) => (
              <span key={cat}>#{cat} </span>
            ))}
          </Categories>
        </Info>
      </Wrapper>
      <TransitionsModal
        product={{ img, name, desc, price, categories, _id }}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
};

export default Product;
