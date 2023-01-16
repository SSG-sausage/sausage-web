import React, { useState, useEffect, useRef } from 'react';
import CartShareDetail from '../../components/order/CartShareDetail';
import { useParams } from 'react-router-dom';

const CartShareDetailContainer = () => {
    const { cartShareId } = useParams();

    return <CartShareDetail />;
};

export default CartShareDetailContainer;
