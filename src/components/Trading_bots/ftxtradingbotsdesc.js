import React from 'react';
import botdiagram from '../../assets/images/botdiagram.png';
import './ftxtradingbotdesc.css';

function FTXTradingBotsDesc() {
    return (
        <>
        <div id="DescPara">
            <h2>
                FTX Trading Bots
            </h2>
            <h4>
                Why trading bots?
            </h4>
            <p>
                I was orignally interested in the trading due to the fact that I wanted to make money over the summer with the money I was making from
                a part-time job. As I began reading about different strategies and indicators etc I thought that surely if I could obtain the right information from indicators 
                which I was using on TV (TradingView), I could use some logic to place a trade for me rather than spending all day staring at a chart. <br/>
                The project started as just a simple way to practice my coding over the summer and try and make a little bit of money but the goals of this project now have become to
                create a framework for creating bots which can use either built-in indicators or use a flask webhook to receive notifications from any outside sources.
            </p>
            <br/> 
            <h4>
                Plan for the project and brief description
            </h4>
            <img src={botdiagram} alt="Bot framework diagram"/>
            <br/> <br/>
            <div id="DiagramDesc">
                <ul>
                    <li>
                        Bot inherits from Bots and Observer.
                    </li>
                    <li>
                        For bots which use built-in indicators, the bot creates the indicator object with any specific settings declared in the
                        constructor, it then adds itself as an observer to this object and receives information whenever the indicator changes,
                        e.g a bot may create a 50 period SMA and be updated everytime the SMA changes.
                    </li>
                    <li>
                        For bots which use notification received through the webhook, the botmanager handles the information and passes it to the
                        correct bot, e.g a if we have a notification setup on TV to send a notification everytime the 50 period SMA crosses the 100 
                        period SMA, the botmanager will receive a string of info when this notification goes off.
                    </li>
                    <li>
                        The first word of the string will always be the bot related to the notification so the botmanager knows which bot to pass the
                        information in the rest of the string to.
                    </li>
                    <li>
                        The botmanager also handles all trades, e.g if a bot wants to place a trade it will send its client, and other trade information 
                        like stop loss, take profit etc to the botmanager and the botmanager then places the trade.
                    </li>
                    <li>
                        It passes its client to the botmanager as this is the subaccount on ftx that the trade will be placed on.
                    </li>
                    <li>
                        A subaccount for each bot must be created on FTX to stop reduce-only orders from interfering with different bots' trades.
                    </li>
                </ul>
            </div>

        </div>
    </>
    )
}

export default FTXTradingBotsDesc;