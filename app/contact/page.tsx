import Link from "next/link";

export default function contact(){
    return(
        <div>
            <h1>Here are the platforms where you can contact me:</h1> <br />

            <ul>
                <Link href="/contact/whatsapp"><li>Whatsapp</li></Link>
                
                <Link href="/contact/email"><li>Email</li></Link>
                
                <Link href="/contact/insta"><li>Instagram</li></Link>
                
                <Link href="/contact/linkedin"><li>Linkedin</li></Link>
            </ul>
        </div>
    )
}