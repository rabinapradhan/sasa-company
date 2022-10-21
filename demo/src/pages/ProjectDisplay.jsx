import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import ModalImage from "react-modal-image";
import Loader from "../components/Loader.jsx";
const ProjectDisplay = () => {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      name,
      _id,
      slug,
      status,
      projectDate,
      projectDescription,
      location,
      client,
      category,
       mainImage{
        asset->{
        _id,
        url
      }
    },
    gallery[]{
      asset->{
          url
      }
  },
  
    }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="w-full h-full">
      <div className="bg-black h-[72px] absolute top-0 left-0 w-full"></div>
      <div className="w-full relative group h-[400px] object-cover">
        {singleProject.mainImage.asset && (
          <div className="w-full group relative h-full">
            <img
              src={singleProject.mainImage.asset.url}
              alt={singleProject.mainImage.alt}
              className="group-hover:brightness-50 duration-500 w-full h-full object-cover "
            />
            <div class="opacity-0 group-hover:opacity-100 duration-500 ease-in-out absolute inset-0 z-10 flex justify-center items-center text-center text-2xl text-white font-semibold">
              {singleProject.name}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-screen-md border-0 mt-6 mx-auto md:border-2  border-gray-300 bg-white flex  py-14  px-4">
        <ul className="md:text-xl text-lg  self-start mx-0 md:mx-auto">
          <li className="flex my-3">
            <span className="font-bold pr-3">Client :</span>
            <p>{singleProject.client}</p>
          </li>
          <li className="flex">
            <span className="font-bold pr-3">Location&nbsp;:</span>
            <p>{singleProject.location}</p>
          </li>
          <li className="flex my-3">
            <span className="font-bold pr-3">Date :</span>

            <p>{singleProject.projectDate}</p>
          </li>
          <li className="flex   my-3">
            <span className="font-bold pr-3">Project Description&nbsp;:</span>
            <p>{singleProject.projectDescription}</p>
          </li>

          <li className="flex">
            <span className="font-bold pr-3">Category :</span>
            <p>{singleProject.category}</p>
          </li>
        </ul>
      </div>

      <div className=" my-14  px-6">
        <div className=" h-full grid  gap-3  md:grid-cols-3">
          {singleProject.gallery.length > 0 &&
            singleProject.gallery.map((img, index) => (
              <div key={index} className="group">
                <ModalImage
                  className="w-full h-full object-cover group-hover:scale-105 duration-300 object-center"
                  small={img.asset.url}
                  large={img.asset.url}
                  hideDownload={true}
                  alt={singleProject.name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
