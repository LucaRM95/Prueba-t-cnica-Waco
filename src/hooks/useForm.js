import { useState } from "react";

/* Custom hook para tomar el valor del input o formulario*/

export const useForm = (intialState = {}) => {
  const [values, setValue] = useState(intialState);

  const handleInputChange = ({ target }) => {
    setValue({
      ...values,
      [target.name]: target.value
    });
  };

  return [values, handleInputChange];
};
