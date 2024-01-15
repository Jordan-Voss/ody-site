import "./CoachCard.css";
const CoachCard = ({ coach }) => {
  return (
    // <div className="box-each-container">
    //   <div className="coach-image">
    //     <img src={coach.image} alt={coach.colour + " Box"} />
    //   </div>
    //   <div className="coach-name">
    //     <p className="name-text">{coach.fname}</p>
    //   </div>
    //   <div className="coach-desc">
    //     <p>{coach.desc}</p>
    //   </div>
    // </div>
    <div class="ctnr">
      {coach.style % 2 === 0 ? (
        <div class="float-container two">
          <div class="float-child desc two">
            <h1>{coach.name}</h1>
            <p>{coach.desc}</p>
            <a href={coach.link}>Read More</a>
          </div>
          <div class={`float-child image ${coach.col}`}>
            <img
              class="coach-img"
              src={coach.image}
              alt={coach.colour + " Box"}
            />
          </div>
        </div>
      ) : (
        <div class="float-container one">
          <div class={`float-child image ${coach.col}`}>
            <img
              class={`coach-img ${coach.col}`}
              src={coach.image}
              alt={coach.colour + " Box"}
            />
          </div>

          <div class="float-child desc">
            <h1>{coach.name}</h1>
            <p>{coach.desc}</p>
            <a href={coach.link}>Read More</a>
          </div>
        </div>
      )}
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
