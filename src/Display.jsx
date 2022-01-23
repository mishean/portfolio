import React from 'react'
import {QuickStartCanvas} from 'react-pts-canvas'

let radius = 50;

function Display() {
  return (
  <div>
      <QuickStartCanvas background="#62e" name="quickstart-tester" 
            onAnimate={ (space, form, t, ft) => {
              form.point( space.pointer, radius, "circle" );
              if (radius > 20) radius -= 1;
            }}
            onAction={ (space, form, type, px, py, evt) => {
              if (type === 'up') radius += 20;

            }}
          />
  </div>);
}

export default Display;

