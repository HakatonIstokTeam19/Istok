import { memo } from "react";
import { MaterialCategory } from "../../data";
import style from "./style.module.css";

export const DetailList: React.FC<MaterialCategory> = memo(({ details, id }) => (
    <div
      className={style.slideTxtBlockList}
     >
      {details.map((detail, index) => (
        <div
          key={index}
          className={style.slideTxtBlockListElement}
          role="tabpanel"
          id={`tabpanel-${id}`}
          aria-labelledby={`tab-${id}`}>
          <h4 className= "fm head-1-st bx">{detail.title}</h4>
          {detail.items.map((item, itemIndex) => (
            <p key={itemIndex} className="body-2-st">{item}</p>
          ))}
        </div>
      ))}
    </div>
));