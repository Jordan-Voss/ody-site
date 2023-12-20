import "./CoachCard.css";
const CoachCard = ({ coach }) => {
  return (
    <div className="box-each-container">
      <div className="coach-image">
        <img src={coach.image} alt={coach.colour + " Box"} />
      </div>
      <div className="coach-name">
        <p className="name-text">{coach.fname}</p>
      </div>
      <div className="coach-desc">
        <p>{coach.desc}</p>
      </div>
    </div>
  );
};

// <div className="box-each-container">
//   <div className={"box " + coach.colour}>
//     <img src={coach.image} alt={coach.colour + " Box"} />
//   </div>
//   <div className="bottom-coach">
//     <h2>{coach.name}</h2>
//     <h3>{coach.position}</h3>
//     <h5>
//       <a href={coach.link}>Read More About {coach.fname}:</a>
//     </h5>
//   </div>
// </div>;
export default CoachCard;
