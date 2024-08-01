import React, { useState, useEffect } from 'react';
import { createBooking } from '../../api';
import { AxiosResponse } from 'axios';
import SuccessModel from '../../components/SuccessModel/SuccessModel';
import { BookingData, ErrorResponse } from '../../types';
import { initialFormData } from '../../utils/constants/form_defaults';
import { calculatePrice } from '../../utils/helpers/priceEngine';
import FailureModel from '../../components/FailureModel/FailureModel';
import BookingForm from '../../components/BookingForm/BookingForm';

const CreateBooking: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse>({status: null, message: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: ['hours_requested', 'animal_type'].includes(name) ? Number(value) : value,
    });
  };

  useEffect(() => {
    const price = calculatePrice(formData);
    setFormData({
      ...formData,
      price,
    });
  }, [formData.animal_type, formData.hours_requested]);

  function isErrorResponse(response: BookingData | ErrorResponse | AxiosResponse): response is ErrorResponse {
    return (response as ErrorResponse).status !== undefined;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await createBooking(formData);
    if (isErrorResponse(res)) {
      setError(res)
      setIsModalOpen(true);
      setFormData(initialFormData);
    } else {
      setIsModalOpen(true);
      setFormData(initialFormData);
    }
  };

  return (
    <>
      <BookingForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
      {isModalOpen && (error.status !== null ? 
                      <FailureModel closeModal={() => setIsModalOpen(false)} error={error} /> :
                      <SuccessModel closeModal={() => setIsModalOpen(false)}/>) }
    </>
  );
};

export default CreateBooking;
