import {loader2} from '../assets'


const Loader = ({title}) => (
  <div className='w-full flex flex-col justify-center items-center'>
    <img className='w-32 h-32 object-contain' src={loader2} alt="loader" />
    <h1 className='font-bold text-2xl text-white m-3'>{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
