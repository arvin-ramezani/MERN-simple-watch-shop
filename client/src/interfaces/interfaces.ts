export interface IRegister {
  firstname: string;
  lastname?: string;
  username: string;
  email: string;
  isAdmin: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface IRegistered {
  firstname: string;
  lastname?: string;
  username: string;
  email: string;
  isAdmin: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IProductListParams {
  category: string;
}

export interface IProduct {
  name: string;
  img: string;
  desc: string;
  price: number;
  _id: number;
  categories: string[];
}

export interface ICartProduct extends IProduct {
  productQuantity: number;
  userId?: string | null;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ICartItemProps {
  name: string;
  desc: string;
  price: number;
  img: string;
  qty: number;
  _id: number;
}

export interface IModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct;
}

export interface IProductModalProps {
  product: IProduct;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CartState {
  cartQuantity: number;
  cartProducts: ICartProduct[];
  totalPrice: number;
  status: "idle" | "loading" | "failed";
}

export interface IRemovePayload {
  _id: number;
  quantity: number;
}

export interface IProductsState {
  products: IProduct[];
  status: "idle" | "loading" | "failed";
}

export interface IUserState {
  userInfo: IRegistered | null;
  status: "idle" | "loading" | "failed";
}

export interface IJWTAccessToken {
  exp: number;
  iat: number;
  id: string;
  isAdmin: boolean;
}
