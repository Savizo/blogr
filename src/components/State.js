import circles from '../images/bg-pattern-circles.svg';
import phones from '../images/illustration-phones.svg';

const State = () => {
  return (
    <>
      <section className=' state py-10 text-white px-5 text-center relative z-10 md:grid md:grid-cols-2 md:text-left xl:px-52'>
        <div>
          <div>
            <img src={circles} alt='' className='state-img circles' />
          </div>
          <div>
            <img src={phones} alt='' className='state-img' />
          </div>
        </div>

        <div className='pt-80 px-5 md:py-20'>
          <h2 className='text-center text-3xl mb-5 text-white lg:text-4xl 2xl:text-5xl md:text-left'>
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>

        <div>
          <div>
            <img src={circles} alt='' className='state-img circles' />
          </div>
          <div>
            <img src={phones} alt='' className='state-img' />
          </div>
        </div>
      </section>
    </>
  );
};

export default State;
