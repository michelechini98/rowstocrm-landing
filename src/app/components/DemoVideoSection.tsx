import { useState } from 'react';
import { Play } from 'lucide-react';
import { BookingLink } from './BookingLink';

const videoId = 'vS0yUQ7TyX8';
const posterUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

export function DemoVideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16" aria-labelledby="demo-video-title">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#446362]">Product demo</p>
          <h2 id="demo-video-title" className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            See RowsToCRM in action
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Watch how a reviewed Google Sheets row becomes a Brevo-ready lead with contact data, company data, optional
            event tracking and row-level sync status.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-3xl border border-emerald-100 bg-emerald-50/70 p-3 shadow-xl shadow-emerald-100/70 sm:mt-10 sm:p-5">
          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-emerald-100 bg-slate-950"
            data-video-id={videoId}
            aria-label="RowsToCRM product demo video"
          >
            {isVideoLoaded ? (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="RowsToCRM product demo video"
              />
            ) : (
              <button
                aria-label="Play RowsToCRM product demo video"
                className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#446362] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                type="button"
                onClick={() => setIsVideoLoaded(true)}
              >
                <img
                  alt="Preview of the RowsToCRM demo showing Google Sheets rows processed into Brevo-ready leads"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.02]"
                  height="720"
                  loading="lazy"
                  src={posterUrl}
                  width="1280"
                />
                <span className="absolute inset-0 bg-slate-950/25" aria-hidden="true" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#446362] shadow-2xl transition-transform duration-200 group-hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" aria-hidden="true" />
                </span>
              </button>
            )}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-600">
          Want this workflow configured for your Brevo account?{' '}
          <BookingLink
            className="font-semibold text-[#446362] underline underline-offset-4 transition-colors hover:text-[#365251] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#446362] focus-visible:ring-offset-2"
            ctaLocation="demo_video_caption"
            trackingEventName="demo_booking_click"
          >
            Book a setup review
          </BookingLink>
          .
        </p>
      </div>
    </section>
  );
}
