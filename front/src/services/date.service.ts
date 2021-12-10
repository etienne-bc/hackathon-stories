const months = [
    undefined,
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

export const parseDate = (date: string) => {
    const [year, month, day] = date.split('-').map(i => parseInt(i, 10));
    return { year, day, month: months[month] };
};

export const dayMonth = (date: string) => {
    const parsed = parseDate(date);
    return `${parsed.day} ${parsed.month}`;
};
