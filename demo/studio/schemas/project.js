export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "projectDate",
      title: "Project Date",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      title: "Categories",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "Residential" },
          { title: "Commercial", value: "Commercial" },
          { title: "Interior", value: "Interior" },
        ],
      },
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "text",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gallery",
      title: "Gallery",
      description: "Add image (important)",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            sortable: true,
          },
        },
      ],
    },
  ],
};
