import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with Dr. Mitchell has been transformative. Her compassionate approach helped me overcome my anxiety.",
    author: "Anonymous Client",
    duration: "6 months of therapy",
  },
  {
    text: "The safe space Dr. Mitchell creates allowed me to open up and work through deep-seated issues.",
    author: "Anonymous Client",
    duration: "1 year of therapy",
  },
  {
    text: "Thanks to Dr. Mitchell's guidance, I've developed better coping mechanisms and improved my relationships.",
    author: "Anonymous Client",
    duration: "9 months of therapy",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Client Stories</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Read about the experiences of others who have benefited from therapy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-12">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-primary opacity-50" />
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.duration}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}