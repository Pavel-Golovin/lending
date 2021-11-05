import { Info } from "./info";
import { Form } from "./form";

export const Body = () => (
  <div className="body">
    <div className="fist-wrapper">
      <Info/>
    </div>
    <div className="second-wrapper">
        <Form/>
    </div>
  </div>
)