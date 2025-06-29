import Image from 'next/image';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

interface TestimonialCardProps {
  text: string;
  name: string;
  image: string;
  rating?: number;
}

const TestimonialCard = ({ text, name, image, rating = 4.5 }: TestimonialCardProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex flex-col justify-center items-center gap-4 text-center py-8 px-[3.25rem] [&>p.quote]:text-[#575757] text-[#29282B] bg-[#F2F4F4] rounded-3xl">
      <Image src="/images/testimonials/quote-right.png" alt="quote icon" width={42} height={42} />
      <p className="text-[1.19rem] quote">{text}</p>
      <div className="stars flex [&>svg]:text-blue-gray">
        {[...Array(fullStars)].map((_, i) => (
          <IoIosStar key={i} />
        ))}
        {hasHalfStar && <IoIosStarHalf />}
      </div>
      <Image
        src={image}
        alt={name}
        width={73}
        height={73}
        className="border-5 rounded-full border-white"
      />
      <p className="font-bold person-name">{name}</p>
    </div>
  );
};

export default TestimonialCard;
