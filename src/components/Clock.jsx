import Countdown, {zeroPad} from 'react-countdown';
import './clock.css';
import PropTypes from 'prop-types';

const Clock = () => {
    const random = () => Math.floor(Math.random() * 120000);
    
        return (
            <Countdown
                date={Date.now() + random(120000)}
                intervalDelay={0}
                precision={2}
                renderer={(props) => {
                    if (props.seconds === 0){
                        return (
                            <div>
                                Ya no esta disponible 7_7
                            </div>
                        )
                    } else {
                        return(
                            <div>
                                <button>
                                    <div>
                                        {zeroPad(props.minutes)}: {zeroPad(props.seconds)}
                                    </div>
                                    Details
                                </button>
                            </div>
                        );
                    }  
                }}
            />
        );
    };

export default Clock;

    Clock.propTypes = {
        minutes: PropTypes.string,
        seconds: PropTypes.string,
    }