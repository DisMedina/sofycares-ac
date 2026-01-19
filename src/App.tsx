import { FadeInUp } from '@/components/AnimatedContainer/FadeInUp';
import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import { EmailSubscriptionForm } from '@/components/EmailSubscription/EmailSubscriptionForm';
import { MissionStatement } from '@/components/MissionStatement/MissionStatement';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { LAUNCH_DATE, ORGANIZATION_NAME, TAGLINE, COPYRIGHT_TEXT } from '@/config/constants';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-coral/5 to-sage/10">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <FadeInUp delay={0}>
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              {ORGANIZATION_NAME}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              {TAGLINE}
            </p>
          </header>
        </FadeInUp>

        {/* Mission Statement */}
        <FadeInUp delay={150}>
          <section className="mb-16">
            <MissionStatement />
          </section>
        </FadeInUp>

        {/* Countdown Timer */}
        <FadeInUp delay={300}>
          <section className="mb-16">
            <CountdownTimer targetDate={LAUNCH_DATE} />
          </section>
        </FadeInUp>

        {/* Email Subscription */}
        <FadeInUp delay={450}>
          <section className="mb-16">
            <EmailSubscriptionForm />
          </section>
        </FadeInUp>

        {/* Social Links */}
        <FadeInUp delay={600}>
          <section className="mb-12">
            <SocialLinks />
          </section>
        </FadeInUp>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-text-secondary/10">
          <p className="text-sm text-text-secondary/70">{COPYRIGHT_TEXT}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
