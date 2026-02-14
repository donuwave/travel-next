import { ReactNode } from 'react';
import { Footer } from '@/widgets/footer';

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div>
      <div>Header</div>
      {children}
      <Footer />
    </div>
  );
}
