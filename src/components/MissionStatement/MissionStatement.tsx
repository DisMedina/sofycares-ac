import { Heart, Users, Hand } from 'lucide-react';
import { MISSION_HEADING, MISSION_TEXT } from '@/config/constants';

export const MissionStatement = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <Heart className="w-8 h-8 text-olive" />
        <h2 className="text-3xl md:text-4xl font-bold text-olive">{MISSION_HEADING}</h2>
        <Users className="w-8 h-8 text-olive" />
      </div>

      <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
        {MISSION_TEXT}
      </p>

      <div className="flex items-center justify-center gap-8 text-sm text-text-secondary/80">
        <div className="flex items-center gap-2">
          <Hand className="w-5 h-5 text-coral" />
          <span>Compassionate Care</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-sage" />
          <span>Community Support</span>
        </div>
      </div>
    </div>
  );
};
