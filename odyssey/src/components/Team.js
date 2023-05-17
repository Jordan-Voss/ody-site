import React, { useEffect, useState } from "react";
import "./Team.css";

function Team() {
  return (
    <div className="hero-team">
      <div className="hero-team__inner">
        <h1 className="hero-team__title">Nerdy, bearded, makers.</h1>
        <p className="hero-team__subtitle">
          <span className="hero-team__subtitle--trim">
            There’s only three of us, but
          </span>
          We’ve got the skills and experience to help you
          <span className="hero-team__subtitle--trim">r team</span>
          tackle the next challenge.
        </p>
      </div>
      <ul className="hero-team__people">
        <li className="hero-team__person hero-team__person--back">
          <a className="hero-team__person-link" href="/team/jim">
            <img
              src="/images/coach.png"
              className="hero-team__img"
              role="presentation"
              alt="Jim Ramsden - Designer"
            />
          </a>
        </li>
        <li className="hero-team__person hero-team__person--row-2">
          <a className="hero-team__person-link" href="/team/jim">
            <img
              src="/images/coach.png"
              className="hero-team__img"
              role="presentation"
              alt="Jim Ramsden - Designer"
            />
          </a>
        </li>
        <li className="hero-team__person hero-team__person--front">
          <a className="hero-team__person-link" href="/team/gav">
            <img
              src="/images/coach2.png"
              className="hero-team__img"
              role="presentation"
              alt="Gav McKenzie - Front-end Developer"
            />
          </a>
        </li>
        <li className="hero-team__person hero-team__person--row-2">
          <a className="hero-team__person-link" href="/team/gav">
            <img
              src="/images/coach3.png"
              className="hero-team__img"
              role="presentation"
              alt="Gav McKenzie - Front-end Developer"
            />
          </a>
        </li>
        <li className="hero-team__person hero-team__person--row-3">
          <a className="hero-team__person-link" href="/team/jim">
            <img
              src="/images/coach.png"
              className="hero-team__img img-222"
              role="presentation"
              alt="Jim Ramsden - Designer"
            />
          </a>
        </li>

        <li className="hero-team__person hero-team__person--back">
          <a className="hero-team__person-link" href="/team/josh">
            <img
              src="/images/coach.png"
              className="hero-team__img"
              role="presentation"
              alt="Josh Rose - Programmer"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Team;
