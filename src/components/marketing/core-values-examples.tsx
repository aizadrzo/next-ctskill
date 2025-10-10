import { CoreValues } from "./core-values";
import { Award, Users, Target, Heart, Star } from "lucide-react";

export function CoreValuesExamples() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-neutral-black-10">
      <h2 className="text-h2 text-neutral-black-100">Core Values Examples</h2>

      {/* Default Examples */}
      <div className="space-y-6">
        <h3 className="text-h3 text-neutral-black-100">Core Values</h3>
        <div className="space-y-8">
          <CoreValues
            icon={
              <Award className="w-10 h-10sm:w-10 sm:h-10 text-primary-60" />
            }
            title="Pride"
            description="A commitment to quality and achieving meaningful results"
          />
          <CoreValues
            icon={
              <Users className="w-10 h-10sm:w-10 sm:h-10 text-primary-60" />
            }
            title="Respect"
            description="Listening, valuing, and supporting every individual"
          />
          <CoreValues
            icon={
              <Target className="w-10 h-10sm:w-10 sm:h-10 text-primary-60" />
            }
            title="Accountability"
            description="Taking ownership and delivering on promises"
          />
          <CoreValues
            icon={
              <Heart className="w-10 h-10sm:w-10 sm:h-10 text-primary-60" />
            }
            title="Integrity"
            description="Acting with honesty, transparency, and purpose"
          />
          <CoreValues
            icon={<Star className="w-10 h-10sm:w-10 sm:h-10 text-primary-60" />}
            title="Service Excellence"
            description="Striving to exceed expectations at every opportunity"
          />
        </div>
      </div>

      {/* With Different Icon Colors */}
      <div className="space-y-6">
        <h3 className="text-h3 text-neutral-black-100">
          With Different Icon Colors
        </h3>
        <div className="space-y-8">
          <CoreValues
            icon={
              <Star className="w-10 h-10sm:w-10 sm:h-10 text-secondary-teal-100" />
            }
            title="Innovation"
            description="Embracing new ideas and creative solutions"
          />
          <CoreValues
            icon={
              <Heart className="w-10 h-10sm:w-10 sm:h-10 text-secondary-magenta-100" />
            }
            title="Compassion"
            description="Showing empathy and care in all our interactions"
          />
          <CoreValues
            icon={
              <Target className="w-10 h-10sm:w-10 sm:h-10 text-secondary-orange-100" />
            }
            title="Focus"
            description="Maintaining clear direction and purposeful action"
          />
        </div>
      </div>

      {/* With Custom Container Styling */}
      <div className="space-y-6">
        <h3 className="text-h3 text-neutral-black-100">
          With Custom Container Styling
        </h3>
        <div className="space-y-4 bg-neutral-white-100 p-8 rounded-lg">
          <CoreValues
            icon={
              <Award className="w-10 h-10sm:w-10 sm:h-10 text-primary-100" />
            }
            title="Excellence"
            description="Delivering outstanding quality in everything we do"
          />
          <CoreValues
            icon={
              <Users className="w-10 h-10sm:w-10 sm:h-10 text-primary-100" />
            }
            title="Teamwork"
            description="Collaborating effectively to achieve shared goals"
          />
        </div>
      </div>
    </div>
  );
}
