import { BookingFormProps } from "../types";

const BookingForm: React.FC<BookingFormProps> = ({ formData, handleSubmit, handleChange }) => {
  return (
      <form onSubmit={handleSubmit} className='form-style mt-5'>
        <div className='text-start lh-sm mb-3'>
          <h2 className='fw-bold'>Book Your Sitting Today!</h2>
          <p className='fst-italic'>Fill in the data below</p>
        </div>
        <div className='form-group mb-1 mt-4'>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className='form-field w-100'
            placeholder='First Name'
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-1'>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className='form-field w-100'
            placeholder='Last Name'
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-1'>
          <input
            type="text"
            id="animal_name"
            name="animal_name"
            className='form-field w-100'
            placeholder='Animal Name'
            value={formData.animal_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='w-100 mb-1 d-flex'>
          <label className='col-md-6 text-start' htmlFor="animal_type">Animal Type: </label>
          <div className='col-md-6 form-field mt-1'>
            <input
              type="radio"
              className="btn-check btn btn-outline-secondary"
              name="animal_type"
              id="cat"
              value={0}
              checked={formData.animal_type === 0}
              onChange={handleChange}
              required
            />
            <label className="btn btn-sm btn-outline-secondary w-50" htmlFor="cat">Cat</label>

            <input
              type="radio"
              className="btn-check"
              name="animal_type"
              id="dog"
              value={1}
              checked={formData.animal_type === 1}
              onChange={handleChange}
              required
            />
            <label className="btn btn-sm btn-outline-secondary w-50" htmlFor="dog">Dog</label>
          </div>
        </div>

        <div className='w-100 mb-1'>
          <label htmlFor="hours_requested" className='col-md-6 text-start'>Hours Requested</label>
          <input
            type="number"
            id="hours_requested"
            name="hours_requested"
            className='col-md-6 form-field'
            value={formData.hours_requested}
            min="2"
            max="8"
            onChange={handleChange}
            required
          />
        </div>

        <div className='w-100'>
          <label htmlFor="date_of_service" className='col-md-6 text-start'>Date of Service:</label>
          <input
            type="date"
            id="date_of_service"
            name="date_of_service"
            className='col-md-6 form-field'
            value={formData.date_of_service}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        { formData.price > 0 &&
          (<div className='w-100 mt-5 bg-secondary'>
            <label className='text-start me-3'>Total Price of this sitting: </label>
            <span className=''>{`$${formData.price}`}</span>
          </div>)
        }

        <button type="submit" className='save-button'>Submit</button>
      </form>
  );
};

export default BookingForm;
