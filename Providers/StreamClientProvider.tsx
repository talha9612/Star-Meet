'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Importing the router
import { usePathname } from 'next/navigation';  // Importing usePathname
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';

import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, isLoaded } = useUser();
  const pathname = usePathname();  // Use usePathname to get the current path

  useEffect(() => {
    // Only proceed if user is loaded
    if (!isLoaded || !user) return;

    if (!API_KEY) throw new Error('Stream API key is missing');

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  // Redirect to sign-in if no video client and not on the sign-in page
  useEffect(() => {
    if (!isLoaded) return; // Wait until user data is loaded

    // If no user, redirect to sign-in (only if we're not already on sign-in page)
    if (!user && pathname !== '/sign-in') {
      window.location.href = '/sign-in';  // Perform a full page redirect to /sign-in
    }
  }, [user, isLoaded, pathname]);

  // Show loader if the video client is not set yet
  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
