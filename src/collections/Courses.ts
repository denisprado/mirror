import colorField from "@/fields/pickColor";
import slug from "@/fields/slug";
import { CollectionConfig } from "payload";

export const Courses: CollectionConfig = {
  slug: "courses",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    slug,
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "url",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    colorField,
  ],
};
