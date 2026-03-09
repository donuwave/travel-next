import React from 'react';

import { TourPage } from '@/screens/tour';

type PageProps = {
  params: Promise<{
    id: string;
    tourId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id, tourId } = await params;

  return <TourPage categoryId={id} tourId={tourId} />;
}
