import { type SpeakingEvent } from "@/lib/events";
import { EventCard } from "@/components/EventCard";

type Props = {
  events: SpeakingEvent[];
};

function groupByMonth(events: SpeakingEvent[]) {
  const sorted = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const groups = new Map<string, SpeakingEvent[]>();
  for (const event of sorted) {
    const d = new Date(event.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(event);
  }
  return groups;
}

function formatMonthLabel(key: string) {
  const [year, month] = key.split("-");
  return `${year}年 ${parseInt(month)}月`;
}

function isUpcomingMonth(key: string) {
  const [year, month] = key.split("-").map(Number);
  const now = new Date();
  return (
    year > now.getFullYear() ||
    (year === now.getFullYear() && month >= now.getMonth() + 1)
  );
}

export function EventList({ events }: Props) {
  const grouped = groupByMonth(events);
  const entries = Array.from(grouped.entries());

  return (
    <section id="speaking" className="py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight mb-10">🎤 Speaking</h2>

        <div className="space-y-12">
          {entries.map(([key, monthEvents]) => {
            const upcoming = isUpcomingMonth(key);
            return (
              <div key={key}>
                {/* Month header */}
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {formatMonthLabel(key)}
                  </h3>
                  {upcoming && (
                    <span className="rounded-full bg-[#0078d4] px-2.5 py-0.5 text-xs font-semibold text-white">
                      Upcoming
                    </span>
                  )}
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Events grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {monthEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
