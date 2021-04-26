import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

import { useForm } from 'react-hook-form';

import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './SendMail.css';

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = formData => console.log(formData);

  console.log(errors);

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>Send Message</h3>
        <CloseIcon
          className='sendMail__close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' placeholder='To' {...register('to', { required: true })} />
        {errors.to && <p className='sendMail__error'>To is required</p>}

        <input
          type='text'
          placeholder='Subject'
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className='sendMail__error'>Subject is required</p>}

        <input
          type='text'
          placeholder='Message...'
          {...register('message', { required: true })}
          className='sendMail__message'
        />
        {errors.message && <p className='sendMail__error'>Message is required</p>}

        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
