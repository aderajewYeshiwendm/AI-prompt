"use client"
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Nav = () => {
    const {data:session} = useSession();
    const [providers, setProviders] = useState(null);

    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const Providers = async () => {
            const res = await getProviders();
            setProviders(res);
        }
        Providers();

    }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
        <Image

        src="/assets/images/logo.svg"
        alt="ai prompt"
        width={40}
        height={40}
        className="object-contain"
        >

        </Image>
        <p className="logo_text">AiPrompt</p>
        </Link>
        {/* desktop */}

        <div className="sm:flex hidden">
        {session?.user ? (
            <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
                Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>

            <Link href="/profile">

            <Image
             src={session?.user.image}
              width={35}
              height={35}
              alt="profile"
              className="rounded-full"></Image>
            </Link>
            </div>
        ):(
            <>

            {providers && Object.values(providers).map((provider) => (
                <button key={provider.name} onClick={() => signIn(provider.id)} className="outline_btn">
                    Sign In
                    </button>
            ))}

            </>
        )}
        </div>

        {/* mobile */}

        <div className="sm:hidden flex relative">
            {
                session?.user ?(
                    <div className="flex">
                        <Image
                        src={session?.user.image}
                        width={35}
                        height={35}
                        alt="profile"
                        className="rounded-full"
                        onClick={() => setToggleDropdown((prev)=>!prev)}
                        
                        >

                        </Image>

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                href="/profile"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                href="/create-prompt"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button type="button"
                                className="mt-5 w-full black_btn"
                                onClick={()=>{
                                    
                                    setToggleDropdown(false);
                                    signOut();

                                }}>
                                    Sign Out

                                </button>
                            </div>
                            )}
                    </div>
                ):(
                    <> {providers && Object.values(providers).map((provider) => (
                        <button key={provider.name} onClick={() => signIn(provider.id)} className="outline_btn">
                            Sign In
                            </button>
                    ))}</>
                )
            }

        </div>

        
        
    </nav>
  )
}

export default Nav