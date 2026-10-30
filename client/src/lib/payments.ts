// Public checkout links (Stripe Payment Links, PayPal button or PayPal.me URLs).
// They are safe to ship in the browser; set them in .env (see .env.example).
// Any link left empty hides its button.
const env = import.meta.env;

export const paymentLinks = {
  stripe: {
    lightRoast: env.VITE_STRIPE_LINK_LIGHT_ROAST || "",
    mediumRoast: env.VITE_STRIPE_LINK_MEDIUM_ROAST || "",
    darkRoast: env.VITE_STRIPE_LINK_DARK_ROAST || "",
    farmerSupport: env.VITE_STRIPE_LINK_FARMER_SUPPORT || "",
  } as Record<string, string>,
  paypal: env.VITE_PAYPAL_LINK || "",
  paypalName: env.VITE_PAYPAL_DISPLAY_NAME || "TOTO",
};
