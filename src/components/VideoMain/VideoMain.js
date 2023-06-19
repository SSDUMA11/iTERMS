import { useState, useEffect} from 'react';
import './videoMain.scss';
import '../../fonts/fonts.scss';
import video from './video/pexels-darlene.mp4'

const VideoMain = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769); ///the table when the screen width is less than 769px

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 769);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
  return (
        <div className='main__video __container'>
            <div className='third__title'>
                <p className='disclaimer'>{isSmallScreen ? 'Easy how to eat cookies':'Easy & Cost-Effective'}</p>
                <h2>How it works?</h2>
                <p className='subtitle'>{isSmallScreen ? 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app.': 'Numerous legal agreements accessible at the touch of your fingerprints for your website or mobile app.'}</p>
            </div>

            <div className='video__main'>
                <video className='video' autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
        
                <div className='line__video'>

                <div className='numer__video'>
                    {isSmallScreen ? '': <div className='line__video__two'></div>}
                    <div className='numer__block block__one'>
                    <div className='numer'>1</div>
                    <p>{isSmallScreen ? 'Choose your policy': 'Choose Your Desired Policy'} </p>
                </div>

                <div className='numer__block block__two'>
                  <div className='numer'>2</div>
                  <p>{isSmallScreen ? 'Chat with AI Assistant':'Collaborate withour AI Assistant'}</p>
                </div> 

                <div className='numer__block block__three'>
                  <div className='numer'>3</div>
                  <p>{isSmallScreen ? 'Get your document':'Collect Your Legal Document'}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default VideoMain