import { TProperty } from "../../types/types";
import "./propertyList.css";
import Property from "./property";

const PropertyList: React.FunctionComponent<{ list: TProperty[] }> = ({
  list,
}) => {
  return (
    <div className="c-propertyList__container">
      {list.map((property, index) => (
        <div className="c-propertyList__item">
          <Property property={property} key={index} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
