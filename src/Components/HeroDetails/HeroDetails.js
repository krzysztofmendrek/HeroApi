import React from 'react';
import { useParams } from 'react-router';
import './HeroDetails.css';

function HeroDetails() {
  const { id } = useParams();

  return (
    <h1>Detalil hero</h1>
  );
}

export default HeroDetails;
