'use client';
interface SocialIconProps {
  className: string;
  url: string;
}
export const SocialIcon = ({ className, url }: SocialIconProps) => (
  <>
    <center><div></div></center>
    <i
      onClick={() => window.open(url)}
      className={`fa ${className} fa-3x icon-3d`}
    ></i>
    <center><div className="icon_text"></div></center>
  </>
);
