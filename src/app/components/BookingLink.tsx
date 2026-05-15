import { AnchorHTMLAttributes, ReactNode } from 'react';
import { bookingUrl, isExternalBookingUrl } from '../../config/links';
import { useLanguage } from '../../i18n/useLanguage';

type BookingLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'aria-label'> & {
  children: ReactNode;
};

export function BookingLink({ children, ...props }: BookingLinkProps) {
  const { t } = useLanguage();

  return (
    <a
      {...props}
      aria-label={t.cta.demoAria}
      href={bookingUrl}
      rel={isExternalBookingUrl ? 'noopener noreferrer' : undefined}
      target={isExternalBookingUrl ? '_blank' : undefined}
    >
      {children}
    </a>
  );
}
