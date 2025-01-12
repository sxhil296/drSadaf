import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCircle, Users2, Brain, Heart, Sparkles } from "lucide-react";

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your personal growth and healing journey.",
    icon: UserCircle,
  },
  {
    title: "Couples Therapy",
    description: "Work together to strengthen your relationship and improve communication.",
    icon: Users,
  },
  {
    title: "Group Sessions",
    description: "Share experiences and learn from others in a supportive group environment.",
    icon: Users2,
  },
  {
    title: "Anxiety Treatment",
    description: "Learn effective strategies to manage anxiety and stress.",
    icon: Brain,
  },
  {
    title: "Depression Therapy",
    description: "Find hope and healing through evidence-based depression treatment.",
    icon: Heart,
  },
  {
    title: "Personal Growth",
    description: "Discover your potential and work towards your personal goals.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I offer a range of therapeutic services tailored to meet your individual needs and help you achieve your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <service.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Personalized approach</li>
                  <li>Evidence-based techniques</li>
                  <li>Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}