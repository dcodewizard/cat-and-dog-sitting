import React, { useState, useEffect } from 'react';
import { createBooking } from '../../api';
import { AxiosResponse } from 'axios';
import SuccessModel from '../../components/SuccessModel/SuccessModel';
import { BookingData, ErrorResponse } from '../../types';
import { initialFormData } from '../../utils/constants';
import { calculatePrice } from '../../utils/helpers/priceEngine';
import FailureModel from '../../components/FailureModel/FailureModel';
import BookingForm from '../../components/BookingForm/BookingForm';

const CreateBooking: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [disableSave, setDisableSave] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse>({status: null, message: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: ['hours_requested', 'animal_type'].includes(name) ? Number(value) : value,
    });
  };

  useEffect(() => {
    setFormData(prevFormData => {
      const price = calculatePrice(prevFormData);
      return {
        ...prevFormData,
        price,
      };
    });
  }, [formData.animal_type, formData.hours_requested]);

  function isErrorResponse(response: BookingData | ErrorResponse | AxiosResponse): response is ErrorResponse {
    return (response as ErrorResponse).status !== undefined;
  }
  function closeModal(){
    setIsModalOpen(false)
    setDisableSave(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    setDisableSave(true)
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
      <BookingForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} disableSave={disableSave}/>
      {isModalOpen && (error.status !== null ? 
                      <FailureModel closeModal={closeModal} error={error} /> :
                      <SuccessModel closeModal={closeModal}/>) }
    </>
  );
};

export default CreateBooking;
