import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WifiTetheringTwoToneIcon from '@mui/icons-material/WifiTetheringTwoTone';
import WifiTetheringOffTwoToneIcon from '@mui/icons-material/WifiTetheringOffTwoTone';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

interface Contest {
  title: string;
  beginTime: string;
  endTime: string;
    prize: string;
    live: boolean;
  registrationStatus: boolean;
  participants: number;
}

const Contests: React.FC = () => {
  // Creating a dynamic array of objects
  const contests: Contest[] = [
    {
      title: "Scholarship test",
      beginTime: "20-12-2023 06:00pm IST",
      endTime: "20-12-2023 08:00pm IST",
          prize: "Free 3 month Internship at Cisco",
          live: true,
      registrationStatus: true,
      participants: 2456,
    },
    {
      title: "Scholarship test",
      beginTime: "20-12-2023 06:00pm IST",
      endTime: "20-12-2023 08:00pm IST",
          prize: "Free 1 month Internship at Google",
          live: false,
      registrationStatus: false,
      participants: 26,
    },
    {
      title: "Scholarship test",
      beginTime: "20-12-2023 06:00pm IST",
      endTime: "20-12-2023 08:00pm IST",
          prize: "Free 3 month Internship at Cisco",
          live: true,
      registrationStatus: true,
      participants: 2456,
    },
    {
      title: "Scholarship test",
      beginTime: "20-12-2023 06:00pm IST",
      endTime: "20-12-2023 08:00pm IST",
          prize: "Free 1 month Internship at Google",
          live: false,
      registrationStatus: false,
      participants: 26,
    },
    // Add more contests as needed
  ];

  return (
    <div>
      <h2 className="carousel-text">
        Contests
        <button className="grid-sub">
          <span> View all </span>
          <ArrowForwardIcon color="primary" className="arrow" />
        </button>
      </h2>
      <p className="grid-content">
        Test your IQ with our Aptitude tests and problem-solving skills with our
        logic tests.
      </p>
      <div className="conteudo">
        <div className="carrousel">
          {contests.map((contest, index) => (
            <article className="card path" key={index}>
              <div className="contest-status">
                Special Contest
                <span>
                  {contest.live ? (
                    <WifiTetheringTwoToneIcon fontSize="small" />
                  ) : (
                    <WifiTetheringOffTwoToneIcon fontSize="small" />
                  )}
                  {contest.live ? "Live now" : "Completed"}
                </span>
              </div>
              <div className="contest-details">
                <h5 className="contest-title">{contest.title}</h5>
                <h6 className="contest-begin">
                  <b>Begins on: </b> {contest.beginTime}
                </h6>
                <h6 className="contest-end">
                  <b>Ends on: </b> {contest.endTime}
                </h6>
                <h6 className="contest-prize">
                  <EmojiEventsRoundedIcon fontSize="small" />
                  <b>{contest.prize}</b>
                </h6>
                <h6 className="contest-register">
                  Registration Status:{' '}
                  <span
                    style={{
                      backgroundColor: contest.registrationStatus
                        ? 'greenyellow'
                        : 'red',
                    }}
                  >
                    {contest.registrationStatus ? (
                      <CheckRoundedIcon />
                    ) : (
                      <ClearRoundedIcon />
                    )}
                  </span>
                </h6>
                <h6 className="contest-people">+{contest.participants} other joined</h6>
                <p className="register-button">Register</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contests;
