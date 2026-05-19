import { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { bookingUrl, isExternalBookingUrl } from '../../config/links';
import { useLanguage } from '../../i18n/useLanguage';
import { trackLinkClick, type TrackingEventName } from '../lib/tracking';

type BookingLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'aria-label'> & {
  children: ReactNode;
  ctaLocation?: string;
  trackingEventName?: TrackingEventName;
};

export function BookingLink({
  children,
  ctaLocation = 'booking_link',
  onClick,
  trackingEventName = 'demo_booking_click',
  ...props
}: BookingLinkProps) {
  const { t } = useLanguage();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackLinkClick(trackingEventName, {
      cta_href: bookingUrl,
      cta_location: ctaLocation,
      cta_text: event.currentTarget.textContent?.trim(),
    });
    onClick?.(event);
  };

  return (
    <a
      {...props}
      aria-label={t.cta.demoAria}
      href={bookingUrl}
      onClick={handleClick}
      rel={isExternalBookingUrl ? 'noopener noreferrer' : undefined}
      target={isExternalBookingUrl ? '_blank' : undefined}
    >
      {children}
    </a>
  );
}
