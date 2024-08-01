'use client'
import ScrollReveal from '@/components/ScrollRevealAnimation';
import Heading from './_components/Heading';
import Image1 from './_components/Image';
import Discription from './_components/Text';


const SecondSection = () => {
  const sec = `max-w-full mx-12 my-24 items-center flex justify-between`;

  return (
    <ScrollReveal>
      <section>
        <Heading />
        <ScrollReveal>
          <section className={sec}>
            <Image1 />
            <Discription />
          </section>
        </ScrollReveal>
      </section>
    </ScrollReveal>
  );
};
export default SecondSection;
