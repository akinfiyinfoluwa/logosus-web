'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from 'lucide-react';

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    router.push('/dashboard');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300">
          Email address
        </Label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
          className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-400"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-300">
          Password
        </Label>
        <Input
          id="password"
          placeholder="Enter your password"
          type="password"
          autoComplete="new-password"
          disabled={isLoading}
          className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-400"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-gray-300">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          placeholder="Confirm your password"
          type="password"
          autoComplete="new-password"
          disabled={isLoading}
          className="bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-400"
          required
        />
      </div>
      <Button
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-teal-400 to-emerald-400 text-gray-900 hover:opacity-90"
      >
        {isLoading ? (
          "Creating account..."
        ) : (
          <>
            Sign up
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
