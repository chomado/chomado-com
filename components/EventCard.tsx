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
      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-[#0078d4]/40 hover:shadow-lg hover:shadow-[#0078d4]/5 hover:-translate-y-0.5"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[1200/630] w-full bg-muted overflow-hidden">
        {event.ogImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.ogImage}
            alt={event.eventName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0078d4]/10 to-purple-500/10">
            <span className="text-4xl">🎤</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        {/* Event Name */}
        <p className="text-xs font-medium text-[#0078d4]">{event.eventName}</p>

        {/* Session Title */}
        <h3 className="font-semibold text-foreground leading-snug group-hover:text-[#0078d4] transition-colors duration-200 line-clamp-2">
          {event.sessionTitle}
        </h3>

        {/* Date & Location */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {formattedDate}
          </span>
          {event.location && (
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {event.location}
            </span>
          )}
        </div>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
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
      </div>
    </a>
  );
}
