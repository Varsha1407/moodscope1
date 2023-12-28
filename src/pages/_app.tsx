import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingPage from "./loading";


const Loading = (): JSX.Element | null => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: string): void => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = (url: string): void => {
      if (url === router.asPath) {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  
  return loading ? <LoadingPage /> : null;

};


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // Simulate a loading delay (5 seconds) before redirecting to the login page
    const delay = setTimeout(() => {
      router.push('/login');  // Adjust the route as needed
    }, 3000);

    return () => clearTimeout(delay);
  }, [router]);
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <Loading />
      <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default App;
