import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const googleReviews = [
  {
    id: 1,
    name: "Liz Sheedy",
    timeAgo: "4 months ago",
    rating: 5,
    text: "ReThrive was recommended by a friend who's a doctor and I am so thrilled I chose them to help heal up after a humerus fracture. I have never had anywhere close to this level of attentive and personalized care at a standard PT office.",
  },
  {
    id: 2,
    name: "Ernest Crane",
    timeAgo: "1 year ago",
    badge: "Local Guide",
    rating: 5,
    text: "After total knee replacement surgery, I signed up with ReThrive to have physical therapy sessions at my home. Best decision I could have made!",
  },
  {
    id: 3,
    name: "Lisa Stern",
    timeAgo: "2 years ago",
    rating: 5,
    text: "I was initially recommended to Eric by my foot doctor for plantar fasciitis. Come to find out, I needed Eric for much more than that! I have been seeing Eric for almost 3 years, for my feet, my shoulders, my hips & even Vertigo. Eric is amazing!",
  },
  {
    id: 4,
    name: "Ryan Singer",
    timeAgo: "2 years ago",
    rating: 5,
    text: "Been a client of Eric's at Rethrive for many years. Eric always goes above and beyond to take care of his patients and has always been someone to help rehab any issues that I have. Rethrive has always provided the best care I have ever received.",
  },
  {
    id: 5,
    name: "Ben Phillips",
    timeAgo: "2 years ago",
    rating: 5,
    text: "My experience with ReThrive Wellness has been excellent. I've been working with Dr. Ullman to manage back pain for over two years. I've seen tremendous improvements in my pain level, strength and flexibility.",
  },
  {
    id: 6,
    name: "John Stapleton",
    timeAgo: "2 years ago",
    rating: 5,
    text: "I have known Eric for over 18 years, as he has treated me for sports related injuries when I was younger and now for age related issues. He has always been quick to diagnose and find a solution to get me back to health.",
  },
  {
    id: 7,
    name: "Gwen Ganyu",
    timeAgo: "2 years ago",
    rating: 5,
    text: "Eric is a very special person. No judgment whatsoever. He is genuinely concerned and listens without interrupting. He addresses my issues and explains how/why they occur, helps with exercises, etc. Highly recommend him as your physical therapist!",
  },
  {
    id: 8,
    name: "Shelby Hunter",
    timeAgo: "2 years ago",
    rating: 5,
    text: "Dr. Ullman and his staff are hands down the best team of physical therapist out there. I've been to multiple physical therapist in my life and I have never seen so much progress before like I have with Dr. Ullman. I would highly recommend him to anyone.",
  },
  {
    id: 9,
    name: "Daniel",
    timeAgo: "2 years ago",
    badge: "Local Guide",
    rating: 5,
    text: "Dr Ullman was a godsend. I threw out my back while traveling and he was highly recommended and lived up to his reputation. Highly recommend.",
  },
  {
    id: 10,
    name: "Shelby Schulte",
    timeAgo: "2 years ago",
    rating: 5,
    text: "Dr. Ullman did a great job! My back has never felt better!",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-brand-200"}`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof googleReviews)[0] }) => (
  <div className="bg-white border border-brand-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    <div className="flex items-start gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/10 flex items-center justify-center shrink-0">
        <span className="text-[#0BA4AE] font-bold text-sm">
          {review.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-brand-900 text-sm">{review.name}</p>
        <div className="flex items-center gap-2">
          {review.badge && (
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
              {review.badge}
            </span>
          )}
          <span className="text-xs text-brand-400">{review.timeAgo}</span>
        </div>
      </div>
      {/* Google icon */}
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    </div>

    <StarRating rating={review.rating} />

    <p className="text-brand-600 text-sm leading-relaxed mt-3 flex-1">
      "{review.text}"
    </p>
  </div>
);

export const GoogleReviews = () => {
  const [page, setPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(googleReviews.length / reviewsPerPage);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 7000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentReviews = googleReviews.slice(
    page * reviewsPerPage,
    page * reviewsPerPage + reviewsPerPage
  );

  return (
    <section className="bg-brand-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm font-bold text-brand-500 uppercase tracking-wider">
              Google Reviews
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-2">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating rating={5} />
            <span className="text-sm font-bold text-brand-700">
              5.0
            </span>
            <span className="text-sm text-brand-400">
              ({googleReviews.length} reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {currentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() =>
              setPage((prev) => (prev - 1 + totalPages) % totalPages)
            }
            className="p-2 rounded-full border border-brand-200 hover:border-[#0BA4AE] hover:text-[#0BA4AE] transition-colors text-brand-400"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === page ? "bg-[#0BA4AE] w-6" : "bg-brand-300 hover:bg-brand-400"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((prev) => (prev + 1) % totalPages)}
            className="p-2 rounded-full border border-brand-200 hover:border-[#0BA4AE] hover:text-[#0BA4AE] transition-colors text-brand-400"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};