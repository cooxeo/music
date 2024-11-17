import Link from "next/link";

export default function Notfound(){
    const notFound = `text-center`
    return(
        <div className={notFound}>
            <h2 className="font-bold text-3xl">Fuck Off</h2>
            <p>Could not found requested resource</p>
            <Link href={"/"}>Return Home</Link>
        </div>
    )
}