import React from "react";
import Grids from "./Grids";
import Hero from "./Hero";

// entire grid component on main page
function Grid() {
  const gridItems = [
    {
      id: 1,
      path: "/resources",
      className: "Course-Resources",
      image:
        "https://cdn.discordapp.com/attachments/715319623637270638/959947930566025256/unknown.png",
      title: "Resources ",
      text: "University/OSSD Resources",
    },

    {
      id: 2,
      path: "/22ApplicantsData",
      className: "Applicants-Data",
      image:
        "https://cdn.discordapp.com/attachments/715319623637270638/959935257329696808/unknown.png",
      title: "2021-2022 Admissions Data",
      text: "Acceptance stats",
    },
    {
      id: 3,
      path: "/Admissions",
      className: "Admissions-101",
      image:
        "https://media.discordapp.net/attachments/832303072645742632/994397194536898560/unknown.png",
      title: "Senior 101",
      text: "Tips to your senior year",
    },
    {
      id: 4,
      path: "/FAQ",
      className: "FAQ",
      image:
        "https://media.discordapp.net/attachments/832303072645742632/994397941970243614/unknown.png",
      title: "FAQ",
      text: "FAQ relating to grade 12/application process",
    },
  ];

  return (
    <>
      <Hero></Hero>
      <section className="grid-container">
        <Grids gridItems={gridItems} row={1} />
        <Grids gridItems={gridItems} row={2} />
      </section>
    </>
  );
}

export default Grid;
