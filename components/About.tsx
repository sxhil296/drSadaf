import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience, I am dedicated to providing a safe and supportive environment 
              where you can explore your thoughts, feelings, and experiences without judgment.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My approach combines evidence-based techniques with compassionate care, tailored to meet your 
              unique needs and goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 mb-2 mx-auto text-primary" />
                  <h3 className="font-semibold mb-1">Licensed</h3>
                  <p className="text-sm text-muted-foreground">PhD in Psychology</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-8 w-8 mb-2 mx-auto text-primary" />
                  <h3 className="font-semibold mb-1">15+ Years</h3>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-8 w-8 mb-2 mx-auto text-primary" />
                  <h3 className="font-semibold mb-1">Specialized</h3>
                  <p className="text-sm text-muted-foreground">Care Approach</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1590650046871-92c887180603"
              alt="Therapy Office"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Certified by:</p>
              <ul className="mt-2">
                <li>American Psychological Association</li>
                <li>Board of Professional Psychology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}