import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
const Testimonial = () => {
  return (
    <section className="py-6">
      <div className="mb-20">
        <h2 className="text-center section-heading">What they’ve said</h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        initialSlide={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        style={{ padding: "0rem 2rem" }}
      >
        <SwiperSlide>
          <div className="">
            <div className="testimonial-slide">
              <Image
                src="/images/avatar-anisha.png"
                width={70}
                height={70}
                className="-mt-9"
                alt="anisha"
              />
              <h3 className="text-sm font-semibold">Anisha Li</h3>
              <p className="body-text text-center">
                &quot;Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="testimonial-slide">
              <Image
                src="/images/avatar-ali.png"
                width={70}
                height={70}
                className="-mt-9"
                alt="ali"
              />
              <h3 className="text-sm font-semibold">Ali Bravo</h3>
              <p className="body-text text-center">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="testimonial-slide">
              <Image
                src="/images/avatar-richard.png"
                width={70}
                height={70}
                className="-mt-9"
                alt="richard"
              />
              <h3 className="text-sm font-semibold">Richard Watts</h3>
              <p className="body-text text-center">
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="testimonial-slide">
              <Image
                src="/images/avatar-shanai.png"
                width={70}
                height={70}
                className="-mt-9"
                alt="shanai"
              />
              <h3 className="text-sm font-semibold"> Shanai Gough</h3>
              <p className="body-text text-center">
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="max-w-full container text-center">
        <button className="button-primary mt-10">Get Started</button>
      </div>
    </section>
  );
};

export default Testimonial;
