import React, { Component } from 'react';

const ExitLogos = () => {
    return (
        <ul className="exit-logos">
            <li>
                <a target="blank" className="reshet" href="http://reshet.tv/">
                    <span className="reader-indicator">
                    אתר
                        רשת
                    </span>
                </a>
            </li>
            <li>
                <a target="blank" className="yummies" href="http://yummies.reshet.tv/">
                <span className="reader-indicator">
                    אתר
                    יאמיז
                    </span>
                </a>
            </li>
            <li>
                <a target="blank" className="mood" href="http://mood.reshet.tv/">
                <span className="reader-indicator">
                    אתר
                    מוד
                    </span>
                </a>
            </li>
            <li>
                <a className="mail" href="mailto:reshet@reshet.tv">
                <span className="reader-indicator">
                    מייל למערכת רשת
                </span>
                </a>
            </li>
        </ul>
    );
};
export default ExitLogos;

