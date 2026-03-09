import React from 'react';

import { CategoryPage } from '@/screens/category';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CategoryPage id={id} />;
}
