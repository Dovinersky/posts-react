import React, { FC } from "react";

const About: FC = () => {
    return (
        <div className="about-page">
            <p>
                This resource contains test dev fetch requests to <span className="italic">jsonplaceholder api</span>.
            </p>
            <p>Possibilities:</p>
            <ul>
                <li>
                    <span className="italic">Fake</span> Authorization via selecting one of the available accounts
                    without credentials passing like login or password.
                </li>
                <li>Display of posts and comments.</li>
                <li>
                    Posts filter is available.{" "}
                    <span className="italic">*filter affects only one paginated posts page.</span>
                </li>
            </ul>
        </div>
    );
};

export default About;
