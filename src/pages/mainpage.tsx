import React from 'react';
import { Picker } from 'emoji-mart';
import Image from 'next/image';

const Mainpage = () => {
  const gradientText = {
    background: 'linear-gradient(to right, #F59115, #FFF878)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Calligraphy,cursive'
  };

  const emotionsWithEmojis = [
    { emotion: 'Happy', emoji: '😊' },
    { emotion: 'Sad', emoji: '😢' },
    { emotion: 'Excited', emoji: '😄' },
    { emotion: 'Worried', emoji: '😟' },
    { emotion: 'Surprised', emoji: '😮' },
    { emotion: 'Scared', emoji: '😨' },
    { emotion: 'Crazy', emoji: '🤪' },
    { emotion: 'Frustrated', emoji: '😤' },
    { emotion: 'Angry', emoji: '😡' },
    { emotion: 'Bored', emoji: '😐' },
    { emotion: 'Sick', emoji: '🤢' },
    { emotion: 'Embarrassed', emoji: '😳' },
    { emotion: 'Tired', emoji: '😴' },
    { emotion: 'Nervous', emoji: '😬' },
    { emotion: 'Calm', emoji: '😌' },
    { emotion: 'Confused', emoji: '😕' },
    { emotion: 'Anxious', emoji: '😰' },
    { emotion: 'Aggressive', emoji: '😠' },
    { emotion: 'Sleepy', emoji: '😪' },
    { emotion: 'Hungry', emoji: '🍔' },
  ];

  // Updated grid container style
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '30px',
    width: '75%', // Fill the width
    height: 'auto', // Adjust height as needed
    padding: '10px', // Optional padding
  };

  return (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        backgroundImage: 'linear-gradient(#1E1E1E, #003041, #1E1E1E)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        border: '1px solid #1E1E1E',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '10px', right: '10px', textAlign: 'right' }}>
      <img src="/Rectangle.png" alt="Logo" style={{ width: '60px', height: '60px',marginRight: '140px' }} />
      <p style={{ ...gradientText, marginBottom:'0', fontSize: '25px', fontWeight: 'normal',marginLeft:'30px' , marginTop:'-50px' }}>MoodScope</p>
    </div>
      <div style={{ marginBottom: '10px', alignSelf:'center', marginRight:'200px', }}>
        <p style={gradientText}>Emotion for the day...??</p>
      </div>
      <div style={gridContainerStyle}>
        {emotionsWithEmojis.map(({ emotion, emoji }) => (
        <div key={emotion}>
          <button style={buttonStyle}>
            <span style={{ fontSize: '40px', lineHeight: '60px' }}>{emoji}</span> {emotion}
            </button>
            </div>
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  width: '100%', // Fixed width
  height: '60px', // Fixed height
  padding: '5px', // Reduced padding
  backgroundColor: '#D9D9D9',
  color: '#000000',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  fontSize: '20px', // Adjust text size if needed
  display: 'flex', // Enable flexbox
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
};

export default Mainpage;