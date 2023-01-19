import React from 'react';
import { useState } from 'react';

export default function House(){
    const [inkop, setInkop] = useState(0);
    const [instats, setInstats] = useState(0);
    const [ranta, setRanta] = useState(0);
    const [amort, setAmort] = useState(30);
    const [vatten, setVatten] = useState(400);
    const [el, setEl] = useState(1400);
    const [sopor, setSopor] = useState(500);
    const [varme, setVarme] = useState(1000);
    const [warning, setWarning] = useState("");
    
  
    const minikrav = (e) => {
        const newValue = e.target.value;
        if (newValue < (inkop * 0.15)) {
            setInstats(inkop * 0.15);
            setWarning("OBS! Kontantinstatsen måste vara minst 15% av inköpspriset!")
        } else {
            setInstats(newValue);
            setWarning("")
          }
        }
        
        function pris(){
            let summa = parseInt((inkop - instats)/(amort*12)) * (1 + ranta/100);
            let inkschablonv = parseInt(summa + parseInt(vatten) + parseInt(el) + parseInt(sopor) + parseInt(varme));
            return inkschablonv;
        }

    return (
      <div>
        <p>Inköpspris: {inkop}kr</p>
        <input
        type="range"
        min={0}
        max={20000000}
        step={25000}
        value={inkop}
        onChange={e => setInkop(e.target.value)}
        />
        
        <p>Kontantinstats: {instats}kr</p>
        <input
        type="range"
        min={0}
        max={5000000}
        step={10000}
        value={instats}
        onChange={minikrav}
        />
        <p style={{ color: "red" }}>{warning}</p>
        
        <p>Ränta: {ranta}%</p>    
        <input
        type="range"
        min={0}
        max={15}
        step={0.1}
        value={ranta}
        onChange={e => setRanta(e.target.value)}
        />
        
        <p>Amortering: {amort}år</p>
        <input
        type="range"
        min={2}
        max={50}
        step={1}
        value={amort}
        onChange={e => setAmort(e.target.value)}
        />

        <p>Vatten: {vatten}kr/mån</p>
        <input
          type="range"
          min={0}
          max={800}
          step={100}
          value={vatten}
          onChange={e => setVatten(e.target.value)}
        />
        
        <p>El: {el}kr/mån</p>
        <input
          type="range"
          min={0}
          max={2800}
          step={100}
          value={el}
          onChange={e => setEl(e.target.value)}
        />
        
        <p>Sopor: {sopor}kr/mån</p>
        <input
          type="range"
          min={0}
          max={1000}
          step={100}
          value={sopor}
          onChange={e => setSopor(e.target.value)}
        />
        
        <p>Värme: {varme}kr/mån</p>
        <input
          type="range"
          min={0}
          max={2000}
          step={100}
          value={varme}
          onChange={e => setVarme(e.target.value)}
        />
        
        <p>Boendekostnad: {pris()}kr/mån</p>
      </div>
    );
  }
