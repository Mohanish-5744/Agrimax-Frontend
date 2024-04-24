import React, { useEffect } from 'react';
import './Wether'
const WeatherWidget = () => {
  useEffect(() => {
    window.weatherWidgetConfig = window.weatherWidgetConfig || [];
    window.weatherWidgetConfig.push({
      selector: ".weatherWidget",
      apiKey: "457FTU2B3ERXE52MQS2LF8YH7",
      location: "India",
      unitGroup: "metric",
      forecastDays: 5,
      title: " India",
      showTitle: true,
      showConditions: true
    });

    const script = document.createElement('script');
    script.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    script.setAttribute('data-timestamp', String(+new Date()));
    document.body.appendChild(script);

    return () => {
      // Clean up the script tag when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="widges">
      <div className="breif-intro">
        Your briefing <span> Sunday, 14 May</span>
      </div>
      <div className="weatherWidget"></div>
    </div>
  );
};

export default WeatherWidget;
