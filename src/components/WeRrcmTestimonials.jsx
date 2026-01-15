import InfiniteMovingCards from './InfiniteMovingCards';
import './WeRrcmTestimonials.css';

function WeRrcmTestimonials() {
  const testimonials = [
    '"I built my first robot in 3 weeks!" – Arjun Sharma',
    '"Represented India in Russia!" – Janithaa M',
    '"Won engineering scholarship!" – Rohan Kumar',
    '"Now I teach my friends!" – Ananya Reddy'
  ];

  return (
    <section className="wrrcm-testimonials">
      <h2>What Our Students Say</h2>
      <InfiniteMovingCards items={testimonials} speed={30} />
    </section>
  );
}

export default WeRrcmTestimonials;
