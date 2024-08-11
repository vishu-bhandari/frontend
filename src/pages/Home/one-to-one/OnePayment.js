const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";
const paymentHandler = async (amount) => {
  const currency = "INR";
  const receiptId = '1234567890';
  
  const response = await fetch(`${BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency,
      receipt: receiptId,
    }),
  });

  const order = await response.json();
  console.log('order', order);

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID, 
    amount,
    currency,
    name: "One to One",
    description: "TEST TRANSACTION",
    image: "", // Add a valid image URL if needed
    order_id: order.id,
    handler: async function (response) {
      const body = { ...response };

      const validateResponse = await fetch(`${BASE_URL}/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const jsonResponse = await validateResponse.json();
      console.log('jsonResponse', jsonResponse);
    },
    prefill: {
      name: "vishu",
      email: "deevishu1234@gmail.com",
      contact: "8587003916",
    },
    notes: {
      address: "Razorpay Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
};

export default paymentHandler;