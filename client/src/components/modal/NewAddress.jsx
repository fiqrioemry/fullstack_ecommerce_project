/* eslint-disable react/prop-types */

import FormControls from "../form/FormControl";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const NewAddress = ({ handleChange, formData, formControls, handleSubmit }) => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-gray-800">
        Create New Address
      </h4>
      <ScrollArea className="h-60">
        <form onSubmit={handleSubmit} className="space-y-6 px-2">
          <FormControls
            formData={formData}
            handleChange={handleChange}
            formControls={formControls}
          />
          <Button className="w-full" type="submit">
            Save
          </Button>
        </form>
      </ScrollArea>
    </div>
  );
};

export default NewAddress;
