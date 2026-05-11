import eventsData from "@/data/events.json";
import { type SpeakingEvent } from "@/lib/events";
import { Hero } from "@/components/Hero";
import { EventList } from "@/components/EventList";

export default function Home() {
  const events = eventsData as SpeakingEvent[];

  return (
    <main className="min-h-screen">
      <Hero />
      <div className="border-t border-border" />
      <EventList events={events} />
    </main>
  );
}

