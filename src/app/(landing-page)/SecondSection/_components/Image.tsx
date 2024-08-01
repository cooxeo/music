import Image from "next/image"
import img1 from '/public/assets/img1.jpg'

export default function Image1(){
    return (
      <div className="object-cover">
        <Image src={img1} 
        alt="Picture of the author"
        width={700}
        height={700}
        />
      </div>
    );
}