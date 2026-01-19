import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { useEmailSubscription } from '@/hooks/useEmailSubscription';
import { EMAIL_API_ENDPOINT } from '@/config/constants';

export const EmailSubscriptionForm = () => {
  const { email, isSubmitting, isSuccess, error, setEmail, subscribe } = useEmailSubscription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(EMAIL_API_ENDPOINT);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto bg-sage-light/20 border-2 border-sage rounded-xl p-6 text-center animate-scale-in">
        <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-olive mb-2">Thank You!</h3>
        <p className="text-text-secondary">
          We'll notify you at <span className="font-medium text-olive">{email}</span> when we launch.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-center text-olive mb-4">
        Get Notified When We Launch
      </h3>
      <p className="text-center text-text-secondary mb-6">
        Be the first to know when our platform goes live. Enter your email below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-olive/60" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-3 bg-cream border-2 border-olive/30 rounded-xl text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label="Email address"
            required
          />
        </div>

        {error && (
          <div className="text-sm text-coral-dark bg-coral-50 border border-coral-light rounded-lg p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-coral hover:bg-coral-dark text-white font-semibold py-3 px-6 rounded-xl shadow-soft-md hover:shadow-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <span>Notify Me</span>
          )}
        </button>
      </form>

      <p className="text-xs text-center text-text-secondary/70 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};
