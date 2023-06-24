
const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props;

    return (
        <div className="flex flex-col justify-between items-center mb-3 border border-gray-500 w-80 p-4 rounded-lg mb-4">
            <p className="flex flex-col items-center">
                Date: <span>22.02.23</span>
                Total items: <span>{totalProducts}</span>
                Total amount: <span>{totalPrice}</span>
            </p>
        </div>
    );
};

export default OrdersCard;