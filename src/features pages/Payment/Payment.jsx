import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import SectionTitle from '../../SectionTitle/SectionTitle';


const stripePromise  = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const {Price, _id} = useParams();
  
    return (
      <div>
        <SectionTitle
      subHeading="clear your due"
      heading="Payment"
    ></SectionTitle>
        <Elements stripe={stripePromise} >
          <CheckoutForm Price={Price} courseId ={_id}></CheckoutForm>
        </Elements>
      </div>
    );
  };
  
export default Payment;