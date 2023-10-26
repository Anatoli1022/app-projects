import './circle.scss';

const Circle = ({ color, time }) => {
  const circleStyle = {
    // marginTop: '20px',
    backgroundColor: color,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'inline-block',
    opacity: 0.8,
    marginRight: '10px',
    animationDuration: time,
  };

  return <div style={circleStyle} className="circle"></div>;
};

export default Circle;
