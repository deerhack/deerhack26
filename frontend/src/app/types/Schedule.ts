interface Event {
    time: string;
    title: string;
    venue: string;
}

export interface Schedule {
    date: string;
    events: Event[];
}