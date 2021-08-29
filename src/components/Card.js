import React from 'react';

const Card = ({email, id, name,}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/(${id}?200x200`} />
            <React.Fragment>
                <h2>{name}</h2>
                <p>{email}</p>
            </React.Fragment>
        </div>
    );
}
    
export default Card;
