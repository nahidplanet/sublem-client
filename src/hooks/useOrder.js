
import { useQuery } from 'react-query';
import axiosInst from '../components/axios';

const useOrder = (user) => {

		const { isLoading, data, refetch } = useQuery(
		['userOrderHistory',user], () => axiosInst.get('/order-submitted/user/').then(data => data)
	);

	const  firstStep = data?.data?.order

	return [firstStep,isLoading, refetch];
	
};

export default useOrder;

