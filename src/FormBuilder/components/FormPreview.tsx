import { Card } from "@/components/ui/card";
import type { FormState } from "../models/form-builder.model";

type Props = {
  state: FormState;
};

export const FormPreview = ({ state }: Props) => {
  return (
    <Card className="w-1/2 flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">Preview</h2>
      <h3 className="font-semibold text-xl">
        Form Title: {state.formTitle ?? "-"}
      </h3>
      <div className="flex flex-col gap-4">
        {state.fields.length > 0 &&
          state.fields.map((item) => {
            switch (item.type) {
              case "text":
                return (
                  <label htmlFor={item.id}>
                    {item.label}
                    <input
                      type="text"
                      key={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                    />
                  </label>
                );
            }
            return <div key={item.id}>dfhds</div>;
          })}
      </div>
    </Card>
  );
};
