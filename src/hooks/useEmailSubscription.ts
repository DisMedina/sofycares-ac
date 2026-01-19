import { useState } from 'react';

interface SubscriptionState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export function useEmailSubscription() {
  const [state, setState] = useState<SubscriptionState>({
    email: '',
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const setEmail = (email: string) => {
    setState((prev) => ({ ...prev, email, error: null }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const subscribe = async (_apiEndpoint: string) => {
    // Reset error state
    setState((prev) => ({ ...prev, error: null }));

    // Validate email
    if (!state.email.trim()) {
      setState((prev) => ({ ...prev, error: 'Email is required' }));
      return;
    }

    if (!validateEmail(state.email)) {
      setState((prev) => ({ ...prev, error: 'Please enter a valid email address' }));
      return;
    }

    // Set loading state
    setState((prev) => ({ ...prev, isSubmitting: true }));

    try {
      // Simulate API call (replace with actual API integration)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, you would make an actual API call:
      // const response = await fetch(apiEndpoint, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: state.email }),
      // });
      //
      // if (!response.ok) {
      //   throw new Error('Subscription failed');
      // }

      // Success
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        error: null,
      }));

      // Store email in localStorage for demo purposes
      localStorage.setItem('subscribedEmail', state.email);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      }));
    }
  };

  const reset = () => {
    setState({
      email: '',
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });
  };

  return {
    email: state.email,
    isSubmitting: state.isSubmitting,
    isSuccess: state.isSuccess,
    error: state.error,
    setEmail,
    subscribe,
    reset,
  };
}
