import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { type SpeakingEvent } from "@/lib/events";

type Props = {
  event: SpeakingEvent;
};

export function EventCard({ event }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-[#0078d4]/40 hover:shadow-lg hover:shadow-[#0078d4]/5 hover:-translate-y-0.5"
    >
      {/* Date & Location */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} />
          {formattedDate}
        </span>
        {event.location && (
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {event.location}
          </span>
        )}
      </div>

      {/* Event Name */}
      <div>
        <p className="text-xs font-medium text-[#0078d4] mb-1">{event.eventName}</p>
        <h3 className="font-semibold text-foreground leading-snug group-hover:text-[#0078d4] transition-colors duration-200">
          {event.sessionTitle}
        </h3>
      </div>

      {/* Tags */}
      {event.tags && event.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Link indicator */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-[#0078d4] transition-colors mt-1">
        <span>詳細を見る</span>
        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
