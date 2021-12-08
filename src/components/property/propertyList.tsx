import { IProperty } from "../../types/interfaces";
import "./propertyList.css";
import Property from "./property";

const PropertyList: React.FunctionComponent<{ list: IProperty[] }> = ({
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
