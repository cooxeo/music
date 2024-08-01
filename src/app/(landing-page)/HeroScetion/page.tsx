import Button from "./_components/Button";
import Discription from "./_components/Discription";
import Heading from "./_components/Heading";

export default function Hero(){
    const heroSection = `max-w-full mx-12`

    return(
        <section className={heroSection}>
            <Heading/>
            <Discription/>
            <Button/>
        </section>
    )
}