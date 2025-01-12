import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Smile, HeartHandshake, Brain } from "lucide-react";

const benefits = [
  {
    title: "Improved Mental Well-being",
    description: "Develop coping strategies and emotional resilience for better mental health.",
    icon: Brain,
  },
  {
    title: "Better Relationships",
    description: "Learn to communicate effectively and build stronger connections with others.",
    icon: HeartHandshake,
  },
  {
    title: "Personal Growth",
    description: "Discover your strengths and work towards achieving your full potential.",
    icon: Smile,
  },
  {
    title: "Safe Environment",
    description: "Express yourself freely in a confidential and non-judgmental space.",
    icon: Shield,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Benefits of Therapy</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Therapy can help you overcome challenges and create positive changes in your life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <benefit.icon className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="mt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}