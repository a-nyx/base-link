import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";

import { TypesIcons } from "./TypesIcons";

const Icons = ({ details }: { details: TypesIcons }) => {
  const {
    linkedin,
    instagram,
    github,
    twitter,
    facebook,
    tiktok,
    youtube,
    spotify,
  } = details;

  const buttonCss =
    "rounded-none flex flex-col items-center p-2 flex-grow-0 flex-shrink-0 basis-0 min-w-[76px]";

  return (
    <div className="flex flex-wrap justify-center py-4">
      {linkedin && (
        <a href={linkedin} className={`${buttonCss}`}>
          <FaLinkedin className="text-3xl text-[#0a66c2]" />
          <span className="text-xs">LinkedIn</span>
        </a>
      )}
      {youtube && (
        <a href={youtube} className={`${buttonCss}`}>
          <FaYoutube className="text-3xl text-[#ff0000]" />
          <span className="text-xs">Youtube</span>
        </a>
      )}
      {instagram && (
        <a href={instagram} className={`${buttonCss}`}>
          <FaInstagram className="text-3xl text-[#fd1d1d]" />
          <span className="text-xs">Instagram</span>
        </a>
      )}
      {github && (
        <a href={github} className={`${buttonCss}`}>
          <FaGithub className="text-3xl text-[#333]" />
          <span className="text-xs">GitHub</span>
        </a>
      )}
      {twitter && (
        <a href={twitter} className={`${buttonCss}`}>
          <FaTwitter className="text-3xl text-[#1da1f2]" />
          <span className="text-xs">Twitter</span>
        </a>
      )}
      {tiktok && (
        <a href={tiktok} className={`${buttonCss}`}>
          <FaTiktok className="text-3xl text-[#000]" />
          <span className="text-xs">Tiktok</span>
        </a>
      )}
      {spotify && (
        <a href={spotify} className={`${buttonCss}`}>
          <FaSpotify className="text-3xl text-[#1db954]" />
          <span className="text-xs">Spotify</span>
        </a>
      )}
      {facebook && (
        <a href={facebook} className={`${buttonCss}`}>
          <FaFacebook className="text-3xl text-[#1877f2]" />
          <span className="text-xs">Facebook</span>
        </a>
      )}
    </div>
  );
};

export default Icons;
