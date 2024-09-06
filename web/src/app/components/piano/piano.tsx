'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import "./piano.scss";

type PianoProps = {
  sendDataToParent: (id: string) => void;
}

export default function Piano(props: PianoProps) {
  const [selectedKey, setSelectedKey] = useState('');
  const keyboardRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (keyboardRef.current) {
      const { scrollLeft } = keyboardRef.current;
      setScrollPosition(scrollLeft / 10);
    }
  };

  const handleClick = ( id: string, purchased: boolean | undefined ) => {
    if ( !purchased ) { 
      setSelectedKey(id);
      props.sendDataToParent(id);
    }
  }

  const keyboard = [
    {id: 'a0'},
    {id: 'a#0'},
    {id: 'b0'},
    {id: 'c1'},
    {id: 'c#1'},
    {id: 'd1'},
    {id: 'd#1'},
    {id: 'e1', purchased: true},
    {id: 'f1'},
    {id: 'f#1'},
    {id: 'g1'},
    {id: 'g#1'},
    {id: 'a1'},
    {id: 'a#1'},
    {id: 'b1'},
    {id: 'c2'},
    {id: 'c#2'},
    {id: 'd2'},
    {id: 'd#2', purchased: true},
    {id: 'e2'},
    {id: 'f2'},
    {id: 'f#2'},
    {id: 'g2'},
    {id: 'g#2'},
    {id: 'a2'},
    {id: 'a#2'},
    {id: 'b2'},
    {id: 'c3', purchased: true},
    {id: 'c#3'},
    {id: 'd3'},
    {id: 'd#3'},
    {id: 'e3'},
    {id: 'f3'},
    {id: 'f#3'},
    {id: 'g3'},
    {id: 'g#3'},
    {id: 'a3'},
    {id: 'a#3'},
    {id: 'b3'},
    {id: 'c4'},
    {id: 'c#4'},
    {id: 'd4'},
    {id: 'd#4'},
    {id: 'e4'},
    {id: 'f4'},
    {id: 'f#4'},
    {id: 'g4'},
    {id: 'g#4'},
    {id: 'a4'},
    {id: 'a#4'},
    {id: 'b4'},
    {id: 'c5'},
    {id: 'c#5'},
    {id: 'd5'},
    {id: 'd#5'},
    {id: 'e5'},
    {id: 'f5'},
    {id: 'f#5'},
    {id: 'g5'},
    {id: 'g#5'},
    {id: 'a5'},
    {id: 'a#5'},
    {id: 'b5'},
    {id: 'c6'},
    {id: 'c#6'},
    {id: 'd6'},
    {id: 'd#6'},
    {id: 'e6'},
    {id: 'f6'},
    {id: 'f#6'},
    {id: 'g6'},
    {id: 'g#6'},
    {id: 'a6'},
    {id: 'a#6'},
    {id: 'b6'},
    {id: 'c7'},
    {id: 'c#7'},
    {id: 'd7'},
    {id: 'd#7'},
    {id: 'e7'},
    {id: 'f7'},
    {id: 'f#7'},
    {id: 'g7'},
    {id: 'g#7'},
    {id: 'a7'},
    {id: 'a#7'},
    {id: 'b7'},
    {id: 'c8'},
  ]

  return (
    <div className="flex flex-col">
      <div id='scrollIndicator' className='self-center'>
        <div id='indicatorBox' style={{left: scrollPosition}} />
        <Image 
          alt='piano location indicator' 
          className='self-center'
          src={'/mini-piano.png'}
          height='30'
          width='340'
        />
      </div>
      <div 
        className="keyboard overflow-x-scroll py-5"
        ref={keyboardRef} 
        onScroll={handleScroll}
      >
        <ul>
          {keyboard.map((k) => {
            const cname = k.id[1] === '#' ? k.id[0] + 's' : k.id[0];
            return (
              <li className={
                cname 
                + (k.purchased ? ' purchased' : '') 
                + (k.id === selectedKey ? ' selected' : '')
              } 
                id={k.id} 
                key={k.id}
                onClick={()=>handleClick(k.id, k.purchased)}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}