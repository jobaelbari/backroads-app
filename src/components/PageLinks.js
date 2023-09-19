import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((page) => {
        return <PageLink key={page.id} {...page} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
