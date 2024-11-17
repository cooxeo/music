'use client';
import ScrollReveal from '@/components/ScrollRevealAnimation';
import Button from './_components/Button';
import Heading from './_components/Heading';
import Projects from './_components/Projects';

export default function FourthSection() {
  return (
    <section>
      <ScrollReveal>
        <section>
          <Heading />
          <Button />
        </section>
      </ScrollReveal>
      <section>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
      </section>
    </section>
  );
}
