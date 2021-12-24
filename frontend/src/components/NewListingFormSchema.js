import * as yup from "yup";

const NewListingFormSchema = yup.object().shape({
    name: yup
    .string()
    .required('You must enter a name for your item')
    .min(2, 'Item name must be a minimum of 2 characters'),
  description: yup
    .string()
    .required('You must enter a description for your item'),
  price: yup
    .number()
    .required('You must set a price for your item'),
  location: yup
    .string()
    .oneOf(['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'], 'You must choose a location'),
  category: yup
    .string()
    .min(1, 'You must choose a category')
});

export default NewListingFormSchema;