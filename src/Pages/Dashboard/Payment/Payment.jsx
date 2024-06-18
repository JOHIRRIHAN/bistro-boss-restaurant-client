import { loadStripe } from "@stripe/stripe-js";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY)
const Payment = () => {
  return (
    <div>
      <SectionTitlr
        heading="Payment"
        subHeading="please Payment at first"
      ></SectionTitlr>

      <div>
        <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
