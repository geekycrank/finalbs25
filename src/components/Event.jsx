import React from "react";
import "./Event.css";

function Event(props) {
  return (
    <><div><br /></div>
    <div className="Event">

      <div className="outerBox">
        <br /><br /><br /><br />
        <div className="innerBox">

          {/* Event Name */}
          <h1 className="eventName">{props.eventName}</h1>

          {/* Event Description */}
          <div className="eventDescription">
            <h2 className="sectionHeading">Events</h2>
            <p className="sectionContent">{props.eventDescription}</p>
          </div>

          {/* Guidelines */}
          <div className="guidelines">
            <h2 className="sectionHeading">Guidelines</h2>
            <ol className="sectionList">
              {props.eventGuidelines.map((guide, index) => (
                <li key={index}>{guide}</li>
              ))}
            </ol>
          </div>

          {/* Rules (with optional Prelims/Finals separation) */}
          <div className="rules">
            <h2 className="sectionHeading">Rules</h2>

            {!props.eventFinals || props.eventFinals.length === 0 ? (
              <ol className="sectionList">
                {props.eventRules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ol>
            ) : (
              <>
                <h3 className="subHeading">Prelims</h3>
                <ol className="sectionList">
                  {props.eventRules.map((rule, index) => Array.isArray(rule) ? (
                    <ul key={index} className="nestedList">
                      {rule.map((subRule, subIndex) => (
                        <li key={subIndex}>{subRule}</li>
                      ))}
                    </ul>
                  ) : (
                    <li key={index}>{rule}</li>
                  )
                  )}
                </ol>

                <h3 className="subHeading">Finals</h3>
                <ol className="sectionList">
                  {props.eventFinals.map((final, index) => Array.isArray(final) ? (
                    <ul key={index} className="nestedList">
                      {final.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <li key={index}>{final}</li>
                  )
                  )}
                </ol>
              </>
            )}
          </div>

          {/* Contact + Prize Pool */}
          <div className="bottomRow">
            <div className="contact">
              <strong>{props.contactName}</strong> {props.contact}
            </div>
            <div className="prize">
              Prize Pool: <strong>{props.prize}</strong>
            </div>
          </div>

        </div>
      </div>
    </div></>
  );
}

export default Event;
