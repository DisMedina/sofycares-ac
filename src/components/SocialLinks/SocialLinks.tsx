import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/config/constants';

export const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: SOCIAL_LINKS.facebook,
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: SOCIAL_LINKS.youtube,
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: SOCIAL_LINKS.instagram,
    },
  ];

  return (
    <div className="text-center">
      <p className="text-text-secondary mb-4 text-sm md:text-base">Follow us on social media</p>
      <div className="flex items-center justify-center gap-6">
        {socialPlatforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${platform.name} page`}
              className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white hover:bg-coral hover:scale-125 transition-all duration-300 shadow-soft hover:shadow-soft-md"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
