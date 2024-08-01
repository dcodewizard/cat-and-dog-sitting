import { FormData } from '../../types';

export const calculatePrice = (formData: FormData): number => {
  const baseCharge = 20;
  const additionalChargePerHour = formData.animal_type === 1 ? 10 : 5;
  const hours = formData.hours_requested;

  return hours >= 2 ? baseCharge + additionalChargePerHour * hours : 0;
};
