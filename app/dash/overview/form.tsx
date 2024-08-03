"use client";

import React from "react";
import { useFormState } from "react-dom";
import { completeTask } from "@/action/task";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormProps {
  id: number;
}

function Form({ id }: FormProps) {
  const [state, formAction] = useFormState(completeTask, null);

  return (
    <div>
      <div className="grid gap-4 py-4">
        <form action={formAction}>
          <Textarea
            name="note"
            placeholder="write description for this task"
            className="col-span-3"
          />
          {state?.Error?.note && <p>{state.Error.note}</p>}
          {state?.Error?.id && <p>{state.Error.id}</p>}

          <input hidden name="id" type="number" value={id} />

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
