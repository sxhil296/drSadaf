'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34')] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Dr. Sadaf
            <span className="block text-2xl sm:text-3xl font-light mt-2 text-muted-foreground">
              Licensed Clinical Psychologist
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Empowering Minds, Changing Lives - Creating a safe space for healing, growth, and self-discovery.
          </p>
          <div className="mt-10">
            <Button size="lg" onClick={scrollToBooking} className="group">
              Book a Session
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
            alt="Dr. Sarah Mitchell"
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}