import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DutchPayDetail from '../../components/dutchpay/DutchPayDetail';

const DutchPayDetailContainer = () => {
    return <DutchPayDetail />;
};

export default DutchPayDetailContainer;
