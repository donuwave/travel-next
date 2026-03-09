'use client';

import { Drawer, Dropdown } from 'antd';
import React, { useRef, useState } from 'react';

import { Logo, MailIconSolid, PhoneIconSolid } from '@/shared/assets';
import { useClickOutside } from '@/shared/hooks';

import {
  SAction,
  SBrand,
  SContacts,
  SContactDropdown,
  SContactItem,
  SContactText,
  SDrawerContent,
  SDrawerContacts,
  SDrawerHeader,
  SDrawerLink,
  SDrawerLogo,
  SDrawerSection,
  SHeader,
  SHeaderShell,
  SMenuButton,
  SMenuButtonLine,
  SNav,
  SNavLink,
} from './header.styles';

const navigation = [
  { label: 'Автобусные туры на юг', href: '/categories/bus-tours' },
  { label: 'Экскурсионные туры', href: '/categories/excursion-tours' },
  { label: 'О нас', href: '#contacts' },
  { label: 'Контакты', href: '#contacts' },
];

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerContentRef = useRef<HTMLDivElement>(null);

  useClickOutside(drawerContentRef, () => setIsDrawerOpen(false), {
    enabled: isDrawerOpen,
  });

  return (
    <SHeaderShell>
      <SHeader>
        <SBrand href="/">
          <Logo />
        </SBrand>

        <SNav>
          {navigation.map((item) => (
            <SNavLink key={item.label} href={item.href}>
              {item.label}
            </SNavLink>
          ))}
        </SNav>

        <SContacts>
          <Dropdown
            open={isDropdownOpen}
            onOpenChange={setIsDropdownOpen}
            trigger={['click']}
            placement="bottomRight"
            overlayStyle={{ paddingTop: 22 }}
            popupRender={() => (
              <SContactDropdown>
                <SContactItem href="tel:+78312137202">
                  <PhoneIconSolid />
                  <SContactText>+7 (831) 213-72-02</SContactText>
                </SContactItem>
                <SContactItem href="tel:+79632307202">
                  <PhoneIconSolid />
                  <SContactText>+7 (963) 230-72-02</SContactText>
                </SContactItem>
                <SContactItem href="mailto:mechta-tc@yandex.ru">
                  <MailIconSolid />
                  <SContactText>mechta-tc@yandex.ru</SContactText>
                </SContactItem>
              </SContactDropdown>
            )}
          >
            <SAction as="button" type="button" aria-expanded={isDropdownOpen}>
              {isDropdownOpen ? 'Закрыть' : 'Меню'}
            </SAction>
          </Dropdown>

          <SMenuButton
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Открыть меню"
          >
            <SMenuButtonLine />
            <SMenuButtonLine />
            <SMenuButtonLine />
          </SMenuButton>
        </SContacts>

        <Drawer
          closable={false}
          title={null}
          placement="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          height="auto"
          mask={false}
          style={{ background: '#fa742d' }}
        >
          <SDrawerContent ref={drawerContentRef}>
            <SDrawerHeader>
              <SDrawerLogo href="/">
                <Logo />
              </SDrawerLogo>

              <SMenuButton
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Закрыть меню"
              >
                <SMenuButtonLine $cross />
                <SMenuButtonLine $cross />
              </SMenuButton>
            </SDrawerHeader>

            <SDrawerSection>
              {navigation.map((item) => (
                <SDrawerLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.label}
                </SDrawerLink>
              ))}
            </SDrawerSection>

            <SDrawerContacts>
              <SContactItem href="tel:+78312137202">
                <PhoneIconSolid />
                <SContactText>+7 (831) 213-72-02</SContactText>
              </SContactItem>
              <SContactItem href="tel:+79632307202">
                <PhoneIconSolid />
                <SContactText>+7 (963) 230-72-02</SContactText>
              </SContactItem>
              <SContactItem href="mailto:mechta-tc@yandex.ru">
                <MailIconSolid />
                <SContactText>mechta-tc@yandex.ru</SContactText>
              </SContactItem>
            </SDrawerContacts>
          </SDrawerContent>
        </Drawer>
      </SHeader>
    </SHeaderShell>
  );
};
