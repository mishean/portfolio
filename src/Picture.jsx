import { Picture } from 'react-responsive-picture';
import imgL from './img/IMG_55161.jpg';
import imgS from './img/IMG_55161_small.jpg';
import React from 'react';

export default function Image() {
  return (<div>
      <Picture 
               sources = {[
                {
                    srcSet: `${imgS}`,
                    media: "(max-width: 900px)",
                    type: "image/webp",
                },
                {
                    srcSet: `${imgL}`,
                    type: "image/webp",
                },
                {
                    srcSet: `${imgL}`,
                    type: "image/webp"
                }
            ]}
      />
  </div>
  );
}


  
  