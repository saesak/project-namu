import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { pathContextHook, initialState } from '@/components/globalState'
import React, { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  
  const [state, setState] = useState(initialState);

  return (
    <pathContextHook.Provider value={{state, setState}}>
    <Component {...pageProps} />
    </pathContextHook.Provider>
  );
}
