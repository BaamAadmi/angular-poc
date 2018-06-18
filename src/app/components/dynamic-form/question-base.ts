export class QuestionBase<T> {
  Value: T;
  Key: string;
  ControlTypeID: number;
  ControlType: string;
  FieldId: string;
  Label: string;
  IsMandatory: boolean;
  SortOrder: number;
  placeholder: string;
  controlValues: Array<any>;
  constructor(options: {
      Value?: T,
      Key?: string,
      Label?: string,
      IsMandatory?: boolean,
      SortOrder?: number,
      placeholder?: string
    } = {}) {
    this.Value = options.Value;
    this.Key = options.Key || "";
    this.Label = options.Label || "";
    this.IsMandatory = !!options.IsMandatory;
    this.SortOrder = options.SortOrder === undefined ? 1 : options.SortOrder;
    this.placeholder = options.placeholder || "";
  }
}
const obj = {
              "ControlTypeID": "1",
              "ControlTypeName": "",
              "FieldID": "",
              "Label": "",
              "IsMandatory": "",
              "controlValues":
                  [{
                    "text": "Bhau",
                    "value": ""
                  },
                  {
                    "text": "Ghanshyam",
                    "value": ""
                  }
                  ]
            };
