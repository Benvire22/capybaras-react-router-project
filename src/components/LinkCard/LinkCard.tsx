import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  path: string;
  img: string;
  info: string;
}

const LinkCard: React.FC<Props> = ({path, img, info}) => {
  return (
    <Link to={path} className="card text-decoration-none pb-3 col-4 mb-4">
      <img src={img} className="card-img-top border" alt="..."/>
      <div className="card-body">
        <h4 className="card-title my-3">{info}</h4>
      </div>
      <span className="btn btn-warning text-white px-5 mx-5 fs-5">show demo</span>
    </Link>
  );
};

export default LinkCard;