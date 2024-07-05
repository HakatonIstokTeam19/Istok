export const connectLinks = [
    {
        linkTitle: 'Чат',
        iconId: 'whatsapp',
        ariaLabel: 'Чат whatsapp',
        to: 'https://wa.me/79311213900?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%81%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BC%21',
    },
    {
        linkTitle: 'Чат',
        iconId: 'telegram',
        ariaLabel: 'Телеграм бот',
        to: 'https://t.me/ISTOKsupport_bot',
    },
    { 
        linkTitle: 'Звонок',
        iconId: 'ring',
        ariaLabel: 'Телефон',
        to: 'tel:+78129662997',
    }
];

export const subscriptionLinks = [
    {
        linkTitle: 'Сообщество',
        iconId: 'vkontakte',
        ariaLabel: 'Группа вконтакте',
        to: 'https://vk.com/istokmebel',
    },
    {
        linkTitle: 'Сообщество',
        iconId: 'telegram',
        ariaLabel: 'Телеграм канал',
        to: 'https://t.me/ISTOK_Connect',
    }
];

export const infoLinks = [
    {
        linkTitle: 'Вопросы и ответы',
        to: '/faq',
    },
    {
        linkTitle: 'Программа лояльности',
        to: '/loyalty-program',
    },
    {
        linkTitle: 'Доставка и возврат',
        to: '/delivery-and-return',
    },
    {
        linkTitle: 'Инструкция по уходу',
        to: '/care-instruction',
    },
];

export const linksConfig = [...connectLinks, ...subscriptionLinks];

export const aboutPageProgressBarItems = [
    {
        text: 'Кто мы',
        id: 'us',
    },
    {
        text: 'Цель',
        id: 'mission',
    },
    {
        text: 'Ценности',
        id: 'values',
    },
    {
        text: 'Команда',
        id: 'team',
    },
    {
        text: 'Соцсети',
        id: 'brand',
    },
];

export const homePageProgressBarItems = [
    { id: "start" },
    { id: "benefits" },
    { id: "products" },
    { id: "materials" },
    { id: "projects" },
    { id: "process" },
    { id: "orderNow" }
]
