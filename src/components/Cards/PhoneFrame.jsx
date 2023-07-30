const PhoneFrame = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <div id='phone'>
        <div id='phone-face'>
          <div id='sensor'></div>
          <div id='camera-and-speaker'>
            <div id='camera'></div>
            <div id='speaker'></div>
          </div>
          <div className='rounded-md' id='screen'>
            <div id='content'>{children}</div>
          </div>
          <div id='home-button'></div>
        </div>
        <div id='mute-button'></div>
        <div id='volume-up-button'></div>
        <div id='volume-down-button'></div>
        <div id='power-button'></div>
      </div>
    </div>
  );
};

export default PhoneFrame;
