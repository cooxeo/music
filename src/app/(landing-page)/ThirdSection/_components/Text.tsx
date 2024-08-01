import Button from "../../HeroScetion/_components/Button";


export default function Text(){
    const text = `font-light text-2xl w-[550px] leading-[50px] mt-10 left-0`
    return(
        <div>
            <p className={text}>In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done.</p>
            <Button/>
        </div>
    )
}