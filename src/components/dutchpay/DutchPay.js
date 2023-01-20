/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import NavigationBar from '../cartshare/NavigationBar';
import DutchPayNavigationBar from './DutchPayNavigationBar';

const DutchPay = () => {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <DutchPayNavigationBar />
        </>
    );
};

export default DutchPay;
