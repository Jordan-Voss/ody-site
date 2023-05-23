function CarouselItem({ item, onHover, onLeave }) {
  return (
    <div className="item">
      <img src={item.src} alt={`Image '${item.index}'`} />
    </div>
  );
}
