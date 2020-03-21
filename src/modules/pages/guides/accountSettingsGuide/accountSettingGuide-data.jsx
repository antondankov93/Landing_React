import React from 'react';

export const settings_guide = [
    {
        headline: "«Корридор лимитов конкурентов»",
        description: "С помощью функции «От» мы отсеиваем конкурентов, у которых верхний лимит меньше определённой суммы. Например, если выставить сумму 15000р, то Satoshkin не будет учитывать тех конкурентов, у которых верхний лимит меньше 15000р. С помощью функции «До» мы отсеиваем тех конкурентов, у кого нижний лимит больше определённой суммы. Например, выставляем сумму до равной 100 000р и Satoshkin уже не будет учитывать конкурентов, у которых нижний лимит больше этой суммы, в данном случае больше 100 000р.",
        imageSrc: "logo1",
    },

    {
        headline: "«Вставать с конкурентом с разницей»",
        description: "Здесь вы выставляете с какой разницей от ближайшего конкурента Satoshkin будет устанавливать цену. Например, если установить значение на 5, то вы будете обгонять ближайшего конкурента на 5 рублей(если у него цена на покупку 500 000р, у вас будет 500 005р, так же с продажей, если у конкурента цена на продажу 500 000р, то у вас будет 499 995р)",
        imageSrc: "logo2",
    },

    {
        headline: "«Отсеять конкурентов с разницей в лимитах меньше чем»",
        description: "Эта функция необходима, чтобы отсеять конкурентов, у которых нижний и верхний лимиты практически равны. Это отсеивает тех конкурентов, которые хотят продать всю свою валюту за один раз и уйти с рынка. При значении 2000, например, Satoshkin не будет учитывать тех, у кого разница в лимитах меньше 2000р, например от 25 000р до 26 500р",
        imageSrc: "logo3",
    },

    {
        headline: "«Игнорировать конкурентов, которые не заходили в сеть больше Х мин.»",
        description: "Satoshkin будет игнорировать конкуретнов, которые отсутствовали в сети длительный срок, например 60 минут.",
        imageSrc: "logo4",
    },

    {
        headline: "«Максимальное отклонение от целевой цены %»",
        description: "Указывает на максимальное отклонение, которое учитывает Satoshkin в ваших объявлениях.",
        imageSrc: "logo5",
    },

    {
        headline: "«Только верифицированные конкуренты»",
        description: "Satoshkin будет считать конкурентами только тех, кто прошёл верификацию на бирже.",
        imageSrc: "logo6",
    },

    {
        headline: "«Выбор дополнительной валюты для отображения целевого курса»",
        description: "Вы можете выбрать, какая валюта будет дополнительно отображаться в верхней части сайта.",
        imageSrc: "logo7",
    },

    {
        headline: "«Игнорировать конкурентов со следующими никами»",
        description: "С помощью этой функции вы можете исключить из списка конкурентов на определённой бирже конкретные аккаунты. Это могут быть ваши дополнительные аккаунты, аккаунты ваших друзей или аккаунты ваших партнёров.",
        imageSrc: "logo8",
    },

]
