import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';

interface GuidedPath {
  title: string;
  description: string;
  certificate: boolean;
  avgTime: string;
}

interface CardProps {
  path: GuidedPath;
}

const CardComponent: React.FC<CardProps> = ({ path }) => {
  return (
    <article className="card path">
      <div className="path-title">
        <LibraryBooksRoundedIcon/>
        <h5>{path.title}</h5>
      </div>
      <div className="path-details">
        <p>{path.description}</p>
        <div className="path-concept">
          <CardMembershipRoundedIcon fontSize="small" />
          <p>Earn <b>Certificate</b> on completion</p>
        </div>
        <div className="path-concept">
          <AccessTimeIcon fontSize="small" />
          <p>Avg. time to complete: <b>{path.avgTime}</b></p>
        </div>
        <button className="path-button">Join now!</button>
      </div>
    </article>
  );
};

const Guided: React.FC = () => {
  const pathsArray: GuidedPath[] = [
    {
      title: 'Guided path 1',
      description:
        'Start learning and practicing company-specific questions in c++ for better performance in your interviews. Basics of c++ are what most people fail to understand. Don’t worry, we have covered all the c++ basics...',
      certificate: true,
      avgTime: '15 days',
    },
    {
      title: 'Guided path 1',
      description:
        'Start learning and practicing company-specific questions in c++ for better performance in your interviews. Basics of c++ are what most people fail to understand. Don’t worry, we have covered all the c++ basics...',
      certificate: true,
      avgTime: '15 days',
    },
    
    // Add more paths as needed
  ];

  return (
    <div>
      <h2 className="carousel-text">
        Guided Paths
        <button className="grid-sub">
          <span> View all </span>
          <ArrowForwardIcon color="primary" className="arrow" />
        </button>
      </h2>
      <p className="grid-content">
        Test your IQ with our Aptitude tests and problem-solving skills with our logic tests.
      </p>
      <div className="conteudo coll">
        <div className="carrousel1">
          {pathsArray.map((path, index) => (
            <CardComponent key={index} path={path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guided;
