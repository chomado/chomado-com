export type SpeakingEvent = {
  id: string;
  date: string;
  eventName: string;
  sessionTitle: string;
  url: string;
  isUpcoming: boolean;
  location?: string;
  tags?: string[];
  ogImage?: string;
};
