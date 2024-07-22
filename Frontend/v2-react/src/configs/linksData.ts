
export const routes = {
    home: '/',
    furniture: 'furniture',
    about: 'about',
    requestSelect: 'requestSelect',
    requestSkipSelect: 'requestSkipSelect',
    profile: 'profile',
    faq: 'faq',
    loyaltyProgram: 'loyaltyProgram',
    deliveryAndReturn: 'deliveryAndReturn',
    careInstruction: 'careInstruction',
    chatWA:  'https://wa.me/79311213900?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%81%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BC%21',
    chatTG: 'https://t.me/ISTOKsupport_bot',
    VK: 'https://vk.com/istokmebel',
    TG: 'https://t.me/ISTOK_Connect',
} as const;

export const furnitureCategories = {
    popular: 'popular',
    kitchen: 'kitchen',
    storageSystems: 'storageSystems',
    hallway: 'hallway',
} as const;

export const headerLinks = [
    { to: routes.home, title: 'Главная' },
    { to: routes.furniture, title: 'Готовая мебель' },
    { to: routes.about, title: 'О нас' },
    { to: routes.requestSelect, title: 'Оставить заявку' },
    { to: routes.profile, title: 'Войти в личный кабинет' },
];


export const connectLinks = [
    {
        linkTitle: 'Чат',
        iconId: 'whatsapp',
        ariaLabel: 'Чат whatsapp',
        to: routes.chatWA,
    },
    {
        linkTitle: 'Чат',
        iconId: 'telegram',
        ariaLabel: 'Телеграм бот',
        to: routes.chatTG,
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
        to: routes.VK,
    },
    {
        linkTitle: 'Сообщество',
        iconId: 'telegram',
        ariaLabel: 'Телеграм канал',
        to: routes.TG,
    }
];

export const infoLinks = [
    {
        linkTitle: 'Вопросы и ответы',
        to: routes.faq,
    },
    {
        linkTitle: 'Программа лояльности',
        to: routes.loyaltyProgram,
    },
    {
        linkTitle: 'Доставка и возврат',
        to: routes.deliveryAndReturn,
    },
    {
        linkTitle: 'Инструкция по уходу',
        to: routes.careInstruction,
    },
];

export const linksConfig = [...connectLinks, ...subscriptionLinks];

