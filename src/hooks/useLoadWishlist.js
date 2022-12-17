
import { useQuery } from 'react-query';
import axiosInst from '../components/axios';

const useLoadWishlist = (user) => {
	const { isLoading, data, refetch } = useQuery(
		['userWishlistProduct',user], () => axiosInst.get('/product/wishlist/all').then(data => data)
	);

	const userinfo = data?.data?.wishlist

	
	
	return [userinfo,isLoading, refetch]
};

export default useLoadWishlist;