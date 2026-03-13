import React from 'react';

import {
  SBreadcrumb,
  SBreadcrumbCurrent,
  SBreadcrumbLink,
  SDecorBottomIcon,
  SDecorIcon,
  SDecorLeftIcon,
  SDecorStack,
  SDetails,
  SDetailTitle,
  SGrid,
  SHero,
  SIntro,
  SPage,
  SSectionTitle,
  SText,
  STitle,
  SValue,
} from './about.styles';

const registryDetails = [
  {
    title: 'Полное наименование',
    value: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МЕЧТА-ТУР НН"',
  },
  {
    title: 'Сокращённое наименование',
    value: 'ООО "МЕЧТА-ТУР НН"',
  },
  {
    title: 'Реестровый номер туроператора',
    value: 'РТО 026319',
  },
  {
    title: 'Реестровый номер турагента',
    value: 'РТА 0040197',
  },
  {
    title: 'ОГРН',
    value: '1245200013453',
  },
  {
    title: 'ИНН',
    value: '5256212067',
  },
  {
    title: 'КПП',
    value: '525601001',
  },
  {
    title: 'Юридический адрес',
    value:
      '603004, Нижегородская область, г.о. город Нижний Новгород, г Нижний Новгород, пр-кт Ленина, д. 115',
  },
  {
    title: 'Сфера туроператорской деятельности',
    value: 'Внутренний туризм, выездной туризм',
  },
];

export const AboutPage = () => {
  return (
    <SPage>
      <SHero>
        <SBreadcrumb aria-label="Хлебные крошки">
          <SBreadcrumbLink href="/">Главная страница</SBreadcrumbLink>
          <span>›</span>
          <SBreadcrumbCurrent>О нас</SBreadcrumbCurrent>
        </SBreadcrumb>

        <SGrid>
          <SIntro>
            <STitle>О нас</STitle>

            <SText>
              <b>Мечта-Тур НН</b> — российский туроператор, специализирующийся на организации
              туристических поездок по России и за её пределами. Мы создаём комфортные и продуманные
              путешествия, позволяя клиентам открывать новые города, культурные маршруты и природные
              достопримечательности.
            </SText>

            <SText>
              Компания работает официально и внесена в{' '}
              <b>Единый федеральный реестр туроператоров Российской Федерации</b>. Это подтверждает
              соответствие требованиям законодательства и наличие финансового обеспечения
              ответственности перед туристами.
            </SText>

            <SSectionTitle>Реестровая информация о туроператоре</SSectionTitle>

            <SDetails>
              {registryDetails.map((item) => (
                <div key={item.title}>
                  <SDetailTitle>{item.title}</SDetailTitle>
                  <SValue>{item.value}</SValue>
                </div>
              ))}

              <div>
                <SDetailTitle>Документы</SDetailTitle>
                <SValue
                  as="a"
                  href="https://ev.economy.gov.ru/lk_exp/registry/to/f4996e41-2cfd-4b9f-b4ac-57ab955da233"
                  target="_blank"
                  rel="noreferrer"
                >
                  Туроператор МТ-НН 33-542-076378/25 от 23.04.2025
                </SValue>
              </div>
            </SDetails>
          </SIntro>

          <SDecorStack aria-hidden="true">
            <SDecorIcon src="/camera.png" alt="" />
            <SDecorLeftIcon src="/compas.png" alt="" />
            <SDecorBottomIcon src="/bag.png" alt="" />
          </SDecorStack>
        </SGrid>
      </SHero>
    </SPage>
  );
};
