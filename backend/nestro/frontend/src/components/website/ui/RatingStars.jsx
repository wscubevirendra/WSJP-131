export default function RatingStars({ rating = 0, reviews }) {
  const total = 5
  const filled = Math.round(rating)

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`text-[10px] ${i < filled ? 'text-[#C6A27E]' : 'text-[#E8E0D5]'}`}
          >
            ★
          </span>
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-[10px] text-[#6B7280]">({reviews})</span>
      )}
    </div>
  )
}
