import Image from "next/image";
import img1 from '/public/assets/img1.jpg'
const Image2 = () => {
    return(
        <div>
            <Image
                src={img1}
                alt="picture"
                width={700}
                height={700}
            />
        </div>
    )
}
export default Image2;