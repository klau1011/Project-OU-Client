import React from "react";
import "./Guide.css";

function Guide() {
  return (
    <>
      <div className="blog-container">
        <h1 id="blog-title">A guide to your grade 12 year</h1>

        <p id="intro-par">
          This guide will give you useful tips through your senior year!
        </p>

        <h3>September to November</h3>
        <ul>
          <li>
            Start building good life and studying habits (especially sleep!)
            now. You'll need them to make it to the other side.
          </li>
          <li>
            Get involved! This is your last chance to join clubs, teams,
            councils, etc. and it'll boost your application.
          </li>
          <li>
            Research into university programs that you may be interested in,
            take online quizzes, attend open house/Q&A sessions
          </li>
          <li>
            Begin to look into common supp app questions (requires lots of
            thought & time but you don't need to figure out the details now)
          </li>
        </ul>

        <h3>November to February</h3>
        <ul>
          <li>You will recieve your OUAC pins to register & apply with</li>
          <li>
            Don't feel stressed to apply right away! You have until January
            before the equal consideration deadline
          </li>
          <li>
            Login to your portals and get started by brainstorming now that you
            know your supp app questions
          </li>
          <li>
            Some programs start accepting now. Don't worry if you haven't gotten
            anything because rounds are progressively easier to get into. Many
            competitive programs won't start accepting until 2nd semester.
          </li>

          <li>
            <strong>
              VERY IMPORTANT FOR SUPP APPS: Edit, edit, edit. Get a lot of
              people to proofread it.
            </strong>{" "}
            They could make or break your application being accepted.
          </li>
        </ul>

        <h3>February to Mid-May</h3>
        <ul>
          <li>Congrats, you're half way there!</li>
          <li>
            Something called <i>senioritis</i> will start to kick in. Stay
            focused, this is not meant to be easy.
          </li>
          <li>
            Most people will receive their final decisions in this period. Some
            (<i>cough cough UofT</i>) waited until the last week of May.
          </li>
          <li>
            After semester 2 midterms are locked in, marks don't really matter
            anymore for admission purposes. You can let loose a bit now, but
            don't be reckless. It's uncommon but people do get rescidned for not
            meeting conditionals on their offer.
          </li>
        </ul>

        <h3>Mid-May to June</h3>
        <ul>
          <li>
            Now that you should have your offers, think about where you want to
            go
          </li>
          <li>
            When deciding, take into consideration: program, prestige, co-op,
            research opportunities (if applicable), environment, cost, etc.{" "}
          </li>
          <li>
            As you get into June, people in your class will stop showing up. I
            did not show up to most of my classes in June, but make sure you do
            enough to meet your conditional if you decide to enjoy your last
            month.{" "}
          </li>
          <li>
            You're pretty much done! Make the most of your last weeks of high
            school, as you will not see many of these people ever again
          </li>
        </ul>
      </div>
    </>
  );
}

export default Guide;
