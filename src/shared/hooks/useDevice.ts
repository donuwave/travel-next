import { useMediaQuery } from 'react-responsive';

export const useDevice = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
  const isTablets = useMediaQuery({ query: `(max-width: 768px)` });
  const isLaptops = useMediaQuery({ query: `(max-width: 1024px)` });
  const isOldDesktop = useMediaQuery({ query: `(max-width: 1200px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: 1400px)` });

  return { isMobile, isTablets, isLaptops, isOldDesktop, isDesktop };
};
