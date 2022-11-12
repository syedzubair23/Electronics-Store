import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const cardNumberRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
// const postalCodeRegExp = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z] [0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;
const postalCodeRegExp = /^[a-z0-9][a-z0-9\-]{0,10}[a-z0-9]$/;

export const userFormSchema = Yup.object({
  email: Yup.string().email("Please enter valid email").required("Please enter your email"),
  first_name: Yup.string().min(2, "First name must be at least 2 characters").max(30, "First name must be at most 30 characters").required("Please enter your first name").matches(/^[a-zA-Z ]*$/, "Enter only alphabets"),
  last_name: Yup.string().min(2, "Last name must be at least 2 characters").max(30, "Last name must be at most 30 characters").required("Please enter your last name").matches(/^[a-zA-Z ]*$/, "Enter only alphabets"),
  company: Yup.string().min(2, "Company name must be at least 2 characters").max(70, "Company name must be at most 70 characters").required("Please enter your company name").matches(/^[0-9A-Za-z\s\-\.]+$/, "Enter only alphanumeric"),
  address: Yup.string().min(6, "Address must be at least 6 characters").max(220, "Address must be at most 220 characters").required("Please enter your address"),
  apartment: Yup.string().min(6, "Address must be at least 6 characters").max(220, "Address must be at least 220 characters").required("Please enter your apartment, suite, etc. address"),
  city: Yup.string().min(2, "City name must be at least 2 characters").max(56, "City name must be at most 56 characters").required("Please enter your city").matches(/^[a-zA-Z ]*$/, "Enter only alphabets"),
  country: Yup.string().min(2, "Country name must be at least 2 characters").max(56, "Country name must be at most 56 characters").required("Please enter your country").matches(/^[a-zA-Z ]*$/, "Enter only alphabets"),
  state_province: Yup.string().min(2, "State / Province name must be at least 2 characters").max(56, "State / Province name must be at least 56 characters").required("Please enter your state / province").matches(/^[a-zA-Z ]*$/, "Enter only alphabets"),
  postal_code: Yup.string().min(3, "Postal code must be at least 3 numbers").max(12, "Postal code must be at most 12 numbers").required("Please enter your postal code").matches(postalCodeRegExp, "Enter valid postal code"),
  phone: Yup.string().min(10, "Phone number must be at least 10 numbers").max(11, "Phone number must be at most 11 numbers").required("Please enter your phone").matches(phoneRegExp, "Enter valid phone number"),
  card_number: Yup.string().min(14, "Card number must be at least 14 numbers").max(16, "Card number must be at most 16 numbers").required("Please enter your card number").matches(cardNumberRegExp ,"Enter valid card number"),
  name_on_card: Yup.string().min(2).max(34).required("Please enter your name on card").matches(/^[a-zA-Z ]*$/, "Enter only alphabets"),
  expiration_date: Yup.string().min(4, "Expiration date must be at least 5 numbers without / or -").max(5, "Expiration date must be at least 5 numbers with / or -").required("Please enter expiration date").matches(/^(0[1-9]|1[0-2](\/|-|))([0-9]{2})$/, "Enter valid expiration date"),
  cvc: Yup.string().min(3, "CVC code must be atleast 3 numbers").max(4, "CVC code must be at most 4 numbers").required("Please enter your card's cvc code").matches(/^[0-9]{3,4}$/, "Enter valid cvc code"),
});

// const cards = {
//   Visa: '4012888888881881',
//   MasterCard: '5555555555554444',
//   American_Express: '371449635398431',
//   Diners_Club: '38520000023237',
//   Discover: '6011000990139424',
//   JCB: '3566002020360505',
// }
