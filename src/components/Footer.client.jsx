import { Link } from "@shopify/hydrogen"



export default function Footer() {
    return(
        <footer className="text-center w-full flex flex-wrap items-center justify-between px-8 py-8 mx-auto md:px-12 ">
            
                
                    <div className="mx-auto md:m-0">
                    <p className="text-md w-full">Copyright © 2022 Crafted Studios. All rights reserved.</p>
                    </div>
                    <div className="flex items-center mx-auto gap-5 mt-5 md:m-0">
                        <Link to="/">TERMS</Link>
                        <a href="https://twitter.com/craftedstudios_">TWITTER</a>
                        <a href="https://www.instagram.com/craftedstudios_/?hl=en">INSTAGRAM</a>
                    </div>
           
           
        </footer>

    )
}