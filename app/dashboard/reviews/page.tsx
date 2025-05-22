export default function Page() {
  const reviews = [
    "Food was excellent. The salmon tataki was my favorite. The chicken skin skewers were very good. We also ordered a beef tongue and that was pretty good too.",
    "Sumiya is an authentic Japanese yakitori restaurant offering traditional Japanese dishes and cooking.",
    "Sumiya is an absolute gem! Our to go options any time we crave Japanese food (sushi/sashimi aside). The open kitchen adds to the authenticity, and the atmosphere is wonderfully genuine.",
    "Finger-licking good"
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
            <p className="text-gray-700 italic">"{review}"</p>
          </div>
        ))}
      </div>
    </main>
  );
}
