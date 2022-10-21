import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
const Teams = () => {
  const [teamsData, setTeams] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"]  | order(order asc){
        name,
        slug,
        role,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setTeams(data))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full py-14 px-2 h-auto">
      <div className="max-w-screen-xl border-2 py-14 mx-auto">
        <h1 className="md:text-4xl font-audrey font-bold text-3xl w-full text-center ">
          Meet Our Teams
        </h1>
        <p className="text-center mt-4 text-gray-600 py-3  text-xl">
          We are a team coming from different backgrounds and bringing on the
          table different high-level skills.
        </p>
        <div className="grid md:grid-cols-4 py-14  gap-3">
          {teamsData &&
            teamsData.map((team, index) => (
              <div className="flex-cols" key={index}>
                {team.mainImage.asset && (
                  <img
                    src={team.mainImage.asset.url}
                    className="w-[270px] object-top  h-[310px] mx-auto object-cover"
                    alt={team.name}
                  />
                )}

                <div className="text-center my-3">
                  <h2 className="font-bold text-xl font-muli ">{team.name}</h2>
                  <span className="text-gray-600 font-muli text-lg tracking-wider">
                    {team.role}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
