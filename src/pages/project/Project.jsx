import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

/* // components
import ProjectComments from "./ProjectComments"
import ProjectSummary from "./ProjectSummary"
 */
// styles
import "./Project.css";

function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <h1>{document.name}</h1>
    </div>
  );
}

export default Project;
