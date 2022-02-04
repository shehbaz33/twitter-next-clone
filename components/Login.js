import React from 'react';
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = ({providers}) => {
  return <div className='text-white flex flex-col space-y-20 pt-48'>
        <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
        />
        <div>
            {Object.values(providers).map(provider => (
                <div key={provider.name} className='flex items-center justify-center'>
                    <button className='px-5 py-2.5 relative rounded group font-medium text-white inline-block'
                    onClick={() => signIn(provider.id,{callbackUrl: "/"})}
                    >
                        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span class="relative">Login with Google</span>
                    </button>
                </div>
            ))}
        </div>
    </div>;
};

export default Login;
