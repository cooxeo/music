'use client'
import ScrollReveal from "@/components/ScrollRevealAnimation";
import Image2 from "./_components/Image";
import Text from "./_components/Text";

export default function ThirdSection(){
    const third = `max-w-full mx-12 my-48 items-center flex justify-between`
    return(
        <ScrollReveal>
        <section className={third}>
            <Text/>
            <Image2/>
        </section>
        </ScrollReveal>
    )
}