export default function ShimmerUi() {
  return (
    <div className="Body">
      {Array(17).fill("").map((e) => {
        return  <div className="Shimmer-card"></div>;
        })}
    </div>
  );
}

