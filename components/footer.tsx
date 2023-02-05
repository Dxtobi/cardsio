import Image from 'next/image';
import { AiOutlineTwitter } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://twitter.com/programmer_dex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with Love by{' '} Dex
        
          <AiOutlineTwitter size={30} color='goldenrod'/>
        </a>
      </footer>
    </>
  )
}