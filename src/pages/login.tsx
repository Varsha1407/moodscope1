import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'; // Import useSession
import supabase from './auth';
const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    'http://localhost:3000/';

  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

  return url;
};


const Login = () => {
  const router = useRouter();
  const { data: session } = useSession(); // Use useSession hook
  useEffect(() => {
    const checkAuth = async () => {
      if (session?.user && router.pathname !== '/mainpage') {
        console.log('User authenticated:', session.user);
        router.push('/mainpage');
      } else if (!session?.user) {
        console.log('User not authenticated, redirecting to login');
        router.push('/login');
      }
    };
  
    checkAuth();
  }, [session, router.pathname]);
  
  
    // Re-run the effect when the session changes

  const handleLoginWithGoogle = async () => {
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options:{
          redirectTo: getURL() + 'mainpage',
        }
      });

      if (error) {
        const castedError = error as { message?: string };
        console.error('Google authentication error:', castedError.message);
      } else {
        console.log('Google authentication successful!', data);
        router.push('/mainpage');
      }
    } catch (error: any) {
      console.error('Error during Google authentication:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#000000]">
      <div className="text-white text-center flex items-center">
        <div className="mr-20">
          <Image src="/Rectangle.png" alt="Logo" width={256} height={128} />
        </div>
        <div className="mb-30 text-left">
          <p className="text-4xl font-lucida-calligraphy mb-40">MoodScope</p>
          <form>
            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="bg-[#608DFF] text-white py-5 px-20 rounded-full hover:bg-blue-600 flex items-center text-2xl"
            >
              Login with
              <Image src="/icon _google_.svg" alt="Google icon" width={25} height={25} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
