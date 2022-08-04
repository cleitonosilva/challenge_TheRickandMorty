/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';


type HeaderProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function Header({title}: HeaderProps): JSX.Element {
  return (
    <header className="p-5 bg-[#00abc1] h-30 flex  mb-120">
      <Link href="/">
        <div className="flex-col cursor-pointer" >
          <img src="/assets/images/home-icon.svg" alt="" title="Acessar Home" className="min-w-10 w-10 ml-1 " />
          <p className="text-gray-100">Home</p>
        </div>
      </Link>

      <div className="m-auto text-center ml-0 w-full">
        <img src="/assets/images/rick-morty.png" alt="" className="w-380 m-auto " />
          <h1 className="text-4xl font-mono text-orange-300 p-0 m-0 ">{title}</h1>
      </div>
    </header>
    
  );
}