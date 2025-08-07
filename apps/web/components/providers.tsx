"use client"

import * as React from "react"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

/**
 * Wraps child components with Convex and Clerk authentication providers.
 *
 * Integrates Convex client and Clerk authentication context, enabling authenticated access to Convex features for all nested components.
 *
 * @param children - The React nodes to be rendered within the provider context
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
    
  );
};
