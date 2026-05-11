"use client";

import { useState } from "react";
import { type SpeakingEvent } from "@/lib/events";
import { EventCard } from "@/components/EventCard";
import { Mic, History } from "lucide-react";

type Tab = "upcoming" | "past";

type Props = {
  events: SpeakingEvent[];
};

export function EventList({ events }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");

  const upcoming = events.filter((e) => e.isUpcoming).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const past = events.filter((e) => !e.isUpcoming).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const displayed = activeTab === "upcoming" ? upcoming : past;

  return (
    <section id="speaking" className="py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight mb-8">🎤 Speaking</h2>

        {/* Tab buttons */}
        <div className="flex gap-1 rounded-xl bg-muted p-1 w-fit mb-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === "upcoming"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mic size={15} />
            Upcoming
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                activeTab === "upcoming"
                  ? "bg-[#0078d4] text-white"
                  : "bg-muted-foreground/20 text-muted-foreground"
              }`}
            >
              {upcoming.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === "past"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <History size={15} />
            Past
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                activeTab === "past"
                  ? "bg-[#0078d4] text-white"
                  : "bg-muted-foreground/20 text-muted-foreground"
              }`}
            >
              {past.length}
            </span>
          </button>
        </div>

        {/* Event grid */}
        {displayed.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p>現在予定されているイベントはありません。</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {displayed.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
