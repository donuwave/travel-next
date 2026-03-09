import { Breadcrumb } from 'antd';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { getCategoriesList } from '@/entities/tour/api/getCategories';
import { getTourById } from '@/entities/tour/api/getTourById';
import { DocxViewer } from '@/widgets/docx-viewer';

import { STourBreadcrumbLink, STourContainer, STourImage, STourPage } from './tour.styles';

type TourPageProps = {
  categoryId: string;
  tourId: string;
};

export const TourPage = async ({ categoryId, tourId }: TourPageProps) => {
  const categories = await getCategoriesList();
  const category = categories.find((item) => String(item.id) === categoryId);
  const tour = await getTourById({ id: tourId });

  if (!category || !tour) {
    notFound();
  }

  return (
    <STourPage>
      <STourContainer>
        <Breadcrumb
          items={[
            { title: <STourBreadcrumbLink href="/">Главная страница</STourBreadcrumbLink> },
            {
              title: (
                <STourBreadcrumbLink href={`/categories/${category.id}`}>
                  {category.title}
                </STourBreadcrumbLink>
              ),
            },
            { title: tour.title },
          ]}
        />
      </STourContainer>

      <STourContainer>
        <STourImage>
          <Image
            src={tour.link}
            alt={tour.title}
            fill
            style={{ objectFit: 'contain', width: '100%' }}
          />
        </STourImage>
      </STourContainer>

      {tour.documentUrl && (
        <STourContainer>
          <DocxViewer fileUrl={tour.documentUrl} />
        </STourContainer>
      )}
    </STourPage>
  );
};
