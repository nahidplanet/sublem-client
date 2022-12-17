
import { useQuery } from 'react-query';
import axiosInst from '../components/axios';

const useLoadCart = (user) => {
	const { isLoading, data:products, refetch } = useQuery(
		['cartProduct',user], () => axiosInst.get('/product/cart/user')
			.then(data => data)
	)

	const catProduct =  products?.data?.result;
	const totalProduct = catProduct?.cartItems.reduce((x, y) => x + y.quantity, 0);
	const totalPrice = catProduct?.cartItems.reduce((x, y) => x + (y.price * y.quantity), 0);
	
	return [catProduct, totalProduct, totalPrice, isLoading, refetch]
	// const [catProduct, totalProduct, totalPrice, isLoading, refetch] =  useLoadCart
};

export default useLoadCart;