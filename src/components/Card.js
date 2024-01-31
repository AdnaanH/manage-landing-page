const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md mx-auto my-4">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
