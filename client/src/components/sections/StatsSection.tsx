import { Users, Globe, Clock, Star } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const stats = [
  {
    icon: Users,
    value: 2500,
    label: "Successful Applications",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Globe,
    value: 45,
    label: "Countries Available",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Clock,
    value: 90,
    label: "Days Average Processing",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Star,
    value: 15,
    label: "Years Experience",
    color: "text-green-600",
    bgColor: "bg-green-100"
  }
];

export default function StatsSection() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <AnimatedStatValue 
                  value={stat.value} 
                  isVisible={isVisible}
                  className={`text-3xl font-bold ${stat.color}`}
                />
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStatValue({ value, isVisible, className }: { value: number; isVisible: boolean; className: string }) {
  const animatedValue = useAnimatedCounter(value, isVisible, 2000);
  
  return (
    <div className={className}>
      {animatedValue.toLocaleString()}
    </div>
  );
}
