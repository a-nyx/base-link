import { JsonObject } from "@prisma/client/runtime/library";

import ContainerMobile from "./Containers/ContainerMobile";
import Main from "./Containers/Main";

import Craft from "./Craft/Craft";
import Editable from "./Craft/Editable";
import FormContainer from "./Craft/FormContainer";
import BottomNav from "./Craft/BottomNav/BottomNav";
import Editor from "./Craft/Editor/Editor";
import Preview from "./Craft/Preview/Preview";
import Publish from "./Craft/Publish/Publish";

import FormIcons from "./Icons/FormIcons";
import Icons from "./Icons/Icons";
import type { TypesIcons } from "./Icons/TypesIcons";

import FormIntro from "./Intro/FormIntro";
import Intro from "./Intro/Intro";
import type { TypesIntro } from "./Intro/TypesIntro";

import FormList from "./List/FormList";
import List from "./List/List";
import type { TypesList } from "./List/TypesList";
// -------------------------------- //

const componentIds = {
  intro: "intro",
  icons: "icons",
  list: "list",
};

type TypesDetails = TypesIntro | TypesIcons | TypesList | {};

type TypesComponent = {
  type: string;
  details: TypesDetails;
};

type TypesMetaData = {
  email: string;
  name: string;
  slug: string;
  isPublished: boolean;
  isDemo: boolean;
  bgCss: JsonObject;
};

interface TypeUser extends TypesMetaData {
  components: TypesComponent[];
}

const DefaultIntro = {
  type: componentIds.intro,
  details: {
    name: "Your Name",
    headline: "Headline",
  },
};

const DefaultIcons = {
  type: componentIds.icons,
  details: {
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    facebook: "",
    tiktok: "",
    youtube: "",
    spotify: "",
  },
};

const DefaultList = {
  type: componentIds.list,
  details: {
    title: "Title",
    links: [
      {
        label: "First Link",
        href: "https://",
      },
      {
        label: "Second Link",
        href: "https://",
      },
    ],
  },
};

const ComponentsTemplate: TypesComponent[] = [
  { ...DefaultIntro },
  { ...DefaultIcons },
  { ...DefaultList },
];

const MetadataTemplate: TypesMetaData = {
  email: "",
  slug: "",
  name: "",
  bgCss: {
    backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
  },
  isPublished: false,
  isDemo: false,
};

// -------------------------------- //

export type {
  TypesComponent,
  TypesDetails,
  TypesIntro,
  TypesIcons,
  TypesList,
  TypesMetaData,
  TypeUser,
};

export {
  componentIds,
  Icons,
  Intro,
  List,
  Craft,
  Main,
  ContainerMobile,
  Editable,
  FormContainer,
  FormIntro,
  FormIcons,
  FormList,
  Editor,
  BottomNav,
  Publish,
  Preview,
  ComponentsTemplate,
  MetadataTemplate,
};
