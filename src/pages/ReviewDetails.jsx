import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import StarRating from '../components/StarRating';

export default function ReviewDetails({ reviews }) {
  const { id } = useParams();
  const review = reviews.find(r => r.id === id);

  if (!review) return (
    <div className="text-center py-40 text-white">
      <p className="mb-4">Review not found</p>
      <Link to="/reviews" className="text-teal-500 font-black text-xs uppercase tracking-widest">Back to list</Link>
    </div>
  );

  return (
    <PageWrapper title="Details" subtitle={`Review #${id}`}>
      <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 p-12 rounded-[3rem]">
        <div className="flex items-center gap-8 mb-12">
          <img src={review.avatar} className="w-24 h-24 rounded-3xl" alt={review.name} />
          <div>
            <h2 className="text-4xl font-black text-white">{review.name}</h2>
            <StarRating rating={review.rating} size={20} />
          </div>
        </div>
        <p className="text-3xl text-gray-200 italic border-l-8 border-teal-500 pl-10">"{review.comment}"</p>
        <div className="mt-8 text-gray-600 text-[10px] font-black uppercase tracking-widest">
          {review.date} • {review.time}
        </div>
      </div>
    </PageWrapper>
  );
}
