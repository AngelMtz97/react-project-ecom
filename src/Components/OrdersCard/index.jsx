import {TrashIcon} from '@heroicons/react/24/outline'


const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props;

    return (
        <div className="flex justify-between items-center px-6 mb-4 border border-gray-500">
            <p>
                <span>22.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
};

export default OrdersCard;